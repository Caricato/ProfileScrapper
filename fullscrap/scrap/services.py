from .media_scrappers.github_scrapper import GitHubScrapper
from .models import GitHubProfile, LinkedinProfile
from .media_scrappers.linkedin_scrapper import LinkedinScrapper

git_root_api = "https://api.github.com"
dulanto_profile = "https://www.linkedin.com/in/rodrigodulanto/"
jd_profile = "https://www.linkedin.com/in/juan-diego-villegas-diaz-50b458219/"

def get_profile(user_name):
    profile = GitHubProfile.objects.get_or_create(name=user_name)[0]
    return profile

def get_linkedin_profile(url):
    s = LinkedinScrapper(linkedin_username="mataj2209@gmail.com",
                         linkedin_password="fullstackoverflow",
                         profile_url=dulanto_profile,
                         headless=False)

    s.start()

    s.join()

    print(s.result.profile.reprJSON())
    gt = GitHubScrapper()
    github = gt.get_by_username("Caricato")
    print(github)
    profile_raw = s.result.profile
    profile = LinkedinProfile(name=profile_raw.name,
                              img_src=profile_raw.image_src,
                              current_location=profile_raw.current_location,
                              email = profile_raw.email)

    return profile