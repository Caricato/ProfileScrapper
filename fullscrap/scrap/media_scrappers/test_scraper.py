from linkedin_scraper import Person, actions
from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver


def test_scrap(linkedin_url):
    options = webdriver.ChromeOptions()
    options.add_argument('--no-sandbox')
    options.add_argument("--window-size=1920,1080")
    options.add_argument("--disable-gpu")

    driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)
    email = "mataj2207@gmail.com"
    password = "fullstackoverflow"
    actions.login(driver, email, password)  # if email and password isnt given, it'll prompt in terminal
    person = Person(linkedin_url, driver=driver)
    print(person.experiences)
    for item in person.experiences:
        experience_formatter(item)


def experience_formatter(item):
    print(str(item))
    designator = str(item).split(' at')[0]
    print(designator)
