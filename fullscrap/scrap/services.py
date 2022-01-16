from .media_scrappers.github_scrapper import GitHubScrapper
from .models import GitHubProfile, LinkedinProfile, LinkedinSkill, LinkedinJob, LinkedinEducation
from .media_scrappers.linkedin_scrapper import LinkedinScrapper

git_root_api = "https://api.github.com"
dulanto_profile = "https://www.linkedin.com/in/rodrigodulanto/"
jd_profile = "https://www.linkedin.com/in/juan-diego-villegas-diaz-50b458219/"


def get_profile(user_name):
    profile = GitHubProfile.objects.get_or_create(name=user_name)[0]
    return profile


def get_linkedin_profile(url):
    try:
        profile = LinkedinProfile.objects.get(profile_url=url)
    except Exception:
        profile = None
    if profile is not None: return profile
    s = LinkedinScrapper(linkedin_username="mataj2207@gmail.com",
                         linkedin_password="fullstackoverflow",
                         profile_url=url,
                         headless=False)

    s.start()

    s.join()

    # print(s.result.profile.reprJSON())
    gt = GitHubScrapper()
    github = gt.get_by_username("rdulantoc")
    profile_raw = s.result.profile
    if profile_raw is not None:
        (profile, _) = LinkedinProfile.objects.get_or_create(name=profile_raw.name,
                                                             profile_url=url,
                                                             img_src=profile_raw.image_src,
                                                             summary= profile_raw.summary,
                                                             current_location=profile_raw.current_location,
                                                             email=profile_raw.email)
        _get_skills(profile, profile_raw.skills)
        _get_jobs(profile, profile_raw.jobs)
        _get_education(profile, profile_raw.education)
        return profile
    else:
        return None


def _get_skills(profile, skills_raw):
    for item in skills_raw:
        skill = LinkedinSkill(name=item)
        skill.save()
        profile.skills.add(skill)


def _get_jobs(profile, jobs_raw):
    for item in jobs_raw:
        job = LinkedinJob(designation=item["designation"],
                          company=item["company"],
                          company_url=item["company_url"],
                          company_image_url=item["company_image_url"],
                          area=item["area"],
                          from_month=item["from_month"],
                          from_year=item["from_year"],
                          to_month=item["to_month"],
                          to_year=item["to_year"])
        job.save()
        profile.jobs.add(job)


def _get_education(profile, ed_raw):
    for item in ed_raw:
        ed = LinkedinEducation(degree=item["degree"],
                               major=item["major"],
                               grade=item["grade"],
                               from_year=item["from_year"],
                               to_year=item["to_year"],
                               university=item["university"],
                               university_url=item["university_url"],
                               university_image_url=item["university_image_url"])
        ed.save()
        profile.education.add(ed)

