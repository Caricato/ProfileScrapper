from django.db import models


# Regular Commit Author
class Person(models.Model):
    name = models.CharField(max_length=200)  # name
    email = models.CharField(max_length=200)  # email

    def __str__(self):
        return f'{self.name} ({self.email})'


class GitHubProfile(models.Model):
    name = models.CharField(max_length=200)

    # todo add repos, etc

    def __str__(self):
        return f'{self.name}'


class LinkedinProfile(models.Model):
    name = models.CharField(max_length=200)  # name
    img_src = models.CharField(max_length=500)
    current_location = models.CharField(max_length=200)
    email = models.CharField(max_length=200)


class User(models.Model):
    name = models.CharField(max_length=100)  # login
    gitId = models.CharField(max_length=30)  # id
    avatarUrl = models.URLField()  # avatar_url
    apiUrl = models.URLField()  # url
    htmlUrl = models.URLField()  # html_url
    reposUrl = models.URLField()  # repos_url
    type = models.CharField(max_length=50)  # type

    def __str__(self):
        return f'{self.name}. Url: {self.htmlUrl}'