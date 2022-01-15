from threading import Thread
import requests


git_root_api = "https://api.github.com"


class GitHubScrapper:
    def get_by_username(self, user_name):
        r = requests.get(f'{git_root_api}/users/{user_name}')
        data = r.json()
        print(data)
        return data