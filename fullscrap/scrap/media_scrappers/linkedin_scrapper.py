from threading import Thread
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.common.exceptions import WebDriverException
import chromedriver_binary
from tqdm import tqdm
import urllib.parse
import time
from .utils import Profile, DetailProfile, ScrapingException, is_url_valid, HumanCheckException, wait_for_loading, \
    wait_for_scrolling, \
    Job, AuthenticationException, Location, Company, ScrapingResult


class LinkedinScrapper(Thread):

    def __init__(self, linkedin_username, linkedin_password, profile_url, headless=False):
        Thread.__init__(self)

        # Creation of a new instance of Chrome
        options = webdriver.ChromeOptions()
        options.add_argument('--no-sandbox')
        options.add_argument("--window-size=1920,1080")
        if headless:
            options.add_argument('--headless')
        options.add_argument("--disable-gpu")

        self.browser = webdriver.Chrome(ChromeDriverManager().install(), options=options)

        self.profile_url = profile_url

        self.result = []

        self.linkedin_username = linkedin_username
        self.linkedin_password = linkedin_password

    def run(self):

        # Login in LinkedIn
        self.browser.get('https://www.linkedin.com/login')

        self.browser.find_element(By.ID, "username").send_keys("mataj2208@gmail.com")
        self.browser.find_element(By.ID, "password").send_keys("fullstackoverflow")
        self.browser.find_elements(By.XPATH, "//*[@id=\"organic-div\"]/form/div[3]/button")[0].click()

        if not self.browser.current_url == "https://www.linkedin.com/feed/":
            # print(self.browser.current_url)
            time.sleep(40)
            raise AuthenticationException()

        self.result = ScrapingResult(self.profile_url, self.scrape_profile(self.profile_url))

        # Closing the Chrome instance
        self.browser.quit()

    def scrape_profile(self, linkedin_url, waiting_time=10):
        # print("Scraping profile")

        try:
            profile = self.__scrape_profile(linkedin_url)

        except HumanCheckException:
            # print("Please solve the captcha.")
            # print("Another try will be performed within 10 seconds...")
            time.sleep(waiting_time)

            profile = self.scrape_profile(linkedin_url, int(waiting_time * 1.5))

        except ScrapingException:
            profile = None

        return profile

    def __scrape_profile(self, profile_linkedin_url):

        if not is_url_valid(profile_linkedin_url):
            raise ScrapingException

        self.browser.get(profile_linkedin_url)

        # Check correct loading of profile and eventual Human Check
        if not str(self.browser.current_url).strip() == profile_linkedin_url.strip():
            if self.browser.current_url == 'https://www.linkedin.com/in/unavailable/':
                raise ScrapingException
            else:
                raise HumanCheckException

        self.load_full_page()

        # SCRAPING

        profile_name = self.scrape_profile_name()
        # print(profile_name)

        current_designation = self.scrape_current_designation()
        # print(current_designation)

        current_location = self.scrape_current_location()
        # print(current_location)

        image_src = self.scrape_profile_image()
        # print(image_src)

        detail_info = self.scrape_detail_info()
        # email = self.scrape_email()
        # print(email)

        experiences = self.experience()
        # print(experiences)

        education = self.education()
        # print(education)

        skills = self.scrape_skills()
        # print(skills)

        # jobs = self.scrape_jobs()  # keep as last scraping
        # # print(jobs)

        return Profile(
            name=profile_name,
            image_src=image_src,
            current_designation=current_designation,
            current_location=current_location,
            email=detail_info.email,
            skills=skills,
            jobs=experiences,
            education=education
        )

    def scrape_profile_name(self):
        # print("scrape profile name")
        return self.browser.find_element(By.CSS_SELECTOR, "h1.text-heading-xlarge").get_attribute("innerText")

    def scrape_profile_image(self):
        # print("scrape profile image")
        return self.browser.find_element(By.CSS_SELECTOR, "img.pv-top-card-profile-picture__image").get_attribute("src")

    def scrape_current_designation(self):
        # print("current_designation")
        return self.browser.find_element(By.CSS_SELECTOR, ".pv-text-details__left-panel  > .text-body-medium"). \
            get_attribute("innerText")

    def scrape_current_location(self):
        # print("current_location")
        return self.browser.find_element(By.CSS_SELECTOR, ".pb2.pv-text-details__left-panel > .text-body-small"). \
            get_attribute("innerText")

    def scrape_detail_info(self):
        detail_info = DetailProfile("", "")
        email, github = self._scrape_detail_info()
        detail_info.email = email
        detail_info.github = github
        return detail_info

    def _scrape_detail_info(self):
        # print("scrape email")
        # > click on 'Contact info' link on the page
        button = self.browser.find_element(By.CSS_SELECTOR, ".pv-text-details__separator > a.ember-view")

        self.browser.execute_script("arguments[0].click();", button)
        # wait_for_loading()
        #
        # button.click()

        wait_for_loading()

        # > gets email from the 'Contact info' popup

        try:
            email = self.browser.find_element(By.CSS_SELECTOR,
                                              "section.ci-email a.pv-contact-info__contact-link").get_attribute(
                "innerText")
        except WebDriverException:
            email = ''

        try:
            github_account = self.browser.find_element(By.XPATH, "//a[contains(@href, 'https://github.com/')]").text
        except WebDriverException:
            github_account = ''

        try:
            self.browser.find_element(By.CSS_SELECTOR, "button.artdeco-modal__dismiss").click()
        except WebDriverException:
            pass

        return email, github_account

    def experience(self):
        """
        Return Experience details
        """
        elements = self.browser.find_elements(By.CSS_SELECTOR, '.pv-position-entity')
        details = []

        for item in elements:
            data = {}
            try:
                data['designation'] = item.find_element(By.CSS_SELECTOR, ".pv-entity__summary-info > h3").get_attribute(
                    "innerText")
                all_text = item.find_element(By.CSS_SELECTOR, ".pv-entity__secondary-title").get_attribute("innerText")
                child_text = item.find_element(By.CSS_SELECTOR, ".pv-entity__secondary-title > span").get_attribute(
                    "innerText")
                data['company'] = all_text.replace(child_text, '')
                data['company_url'] = item.find_element(By.CSS_SELECTOR,
                                                        ".pv-profile-section__card-item-v2 a.ember-view").get_attribute(
                    "href")
                data['company_image_url'] = item.find_element(By.CSS_SELECTOR, ".pv-entity__logo > img").get_attribute(
                    "src")
                data['area'] = item.find_element(By.CSS_SELECTOR,
                                                 ".pv-entity__location > span:last-child").get_attribute(
                    "innerText")
                from_dates, to_dates = item.find_element(By.CSS_SELECTOR,
                                                         ".pv-entity__date-range > span:last-child").get_attribute(
                    "innerText").split(" – ")
                if from_dates:
                    data['from_month'], data['from_year'] = from_dates.split()
                else:
                    data['from_month'] = data['from_year'] = None
                if to_dates and len(to_dates.split()) > 1:
                    data['to_month'], data['to_year'] = to_dates.split()
                else:
                    data['to_month'], data['to_year'] = None, 'Present'
                details.append(data)
            except WebDriverException:
                pass

        return details

    def education(self):
        """
        Return Education details
        """
        elements = self.browser.find_elements(By.CSS_SELECTOR, '.pv-education-entity')
        details = []

        for item in elements:
            data = {}
            data['degree'] = item.find_element(By.CSS_SELECTOR,
                                               ".pv-entity__degree-name .pv-entity__comma-item").get_attribute(
                "innerText")
            data['major'] = item.find_element(By.CSS_SELECTOR,
                                              ".pv-entity__fos.t-14.t-black.t-normal > span.pv-entity__comma-item").get_attribute(
                "innerText")
            data['grade'] = item.find_element(By.CSS_SELECTOR,
                                              ".pv-entity__grade .pv-entity__comma-item").get_attribute("innerText")
            data['from_year'], data['to_year'] = item.find_element(By.CSS_SELECTOR,
                                                                   ".pv-entity__dates > span:last-child").get_attribute(
                "innerText").split(" – ")
            data['university'] = item.find_element(By.CSS_SELECTOR, ".pv-entity__school-name").get_attribute(
                "innerText")
            data['university_url'] = item.find_element(By.CSS_SELECTOR,
                                                       ".pv-profile-section__card-item a.ember-view").get_attribute(
                "href")
            data['university_image_url'] = item.find_element(By.CSS_SELECTOR, ".pv-entity__logo > img").get_attribute(
                "src")
            details.append(data)

        return details

    def scrape_skills(self):
        # print("scrape skills")
        try:
            self.browser.execute_script(
                "document.getElementsByClassName('pv-skills-section__additional-skills')[0].click()")
        except WebDriverException:
            return []

        wait_for_loading()

        try:
            return self.browser.execute_script(
                "return (function(){els = document.getElementsByClassName('pv-skill-category-entity');results = ["
                "];for (var i=0; i < els.length; i++){results.push(els[i].getElementsByClassName("
                "'pv-skill-category-entity__name-text')[0].innerText);}return results;})()")
        except WebDriverException:
            return []

    def load_full_page(self):
        window_height = 1080
        scrolls = 1

        # height = self.browser.execute_script("return document.body.scrollHeight")
        # for i in range(int(height / 100)):
        #     self.browser.execute_script("window.scrollTo(0, %d);" % int((i + 1) * 100))

        while scrolls * window_height < self.browser.execute_script("return document.body.offsetHeight"):
            self.browser.execute_script('window.scrollTo(0, ' + str(window_height * scrolls) + ');')
            wait_for_scrolling()
            scrolls += 1

        for i in range(self.browser.execute_script(
                "return document.getElementsByClassName('pv-profile-section__see-more-inline').length")):
            try:
                self.browser.execute_script(
                    "document.getElementsByClassName('pv-profile-section__see-more-inline')[" + str(
                        i) + "].click()")
            except WebDriverException:
                pass

            wait_for_loading()
