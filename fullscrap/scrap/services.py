import requests
from .models import GitHubProfile

git_root_api = "https://api.github.com"


def get_profile(user_name):
    profile = GitHubProfile.objects.get_or_create(name=user_name)[0]
    return profile


