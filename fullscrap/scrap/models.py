import graphene
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


class LinkedinSkill(models.Model):
    name = models.CharField(max_length=200)  # name


class LinkedinJob(models.Model):
    designation = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    company_url = models.URLField()
    company_image_url = models.URLField()
    area = models.CharField(max_length=200)
    from_month = models.CharField(max_length=200)
    from_year = models.CharField(max_length=200)
    to_month = models.CharField(max_length=200, null=True)
    to_year = models.CharField(max_length=200, null=True)


class LinkedinEducation(models.Model):
    degree = models.CharField(max_length=200)
    major = models.CharField(max_length=200)
    grade = models.CharField(max_length=200)
    from_year = models.CharField(max_length=200)
    to_year = models.CharField(max_length=200)
    university = models.CharField(max_length=200)
    university_url = models.URLField()
    university_image_url = models.URLField()


class LinkedinProfile(models.Model):
    name = models.CharField(max_length=200)  # name
    img_src = models.CharField(max_length=500)
    current_location = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    jobs = models.ManyToManyField(LinkedinJob)
    skills = models.ManyToManyField(LinkedinSkill)
    education = models.ManyToManyField(LinkedinEducation)


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