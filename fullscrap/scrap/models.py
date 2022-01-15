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
