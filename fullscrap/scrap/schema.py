import graphene
from graphene import relay, ObjectType, Schema
from graphene_django import DjangoObjectType
from .models import Person, GitHubProfile, LinkedinProfile, User
from .services import get_profile, get_linkedin_profile
from graphene_django.filter import DjangoFilterConnectionField


# Node is a Type for GraphQL
class PersonNode(DjangoObjectType):
    class Meta:
        model = Person
        filter_fields = {
            'name': ['exact', 'icontains', 'istartswith'],
            'email': ['exact', 'icontains'],
        }
        interfaces = (relay.Node,)


class UserNode(DjangoObjectType):
    class Meta:
        model = User
        filter_fields = {
            'name': ['exact', 'icontains', 'istartswith'],
            'gitId': ['exact', 'icontains'],
            'avatarUrl': ['exact'],
            'apiUrl': ['exact'],
            'htmlUrl': ['exact'],
            'reposUrl': ['exact'],
            'type': ['exact'],
            'author_commits': ['exact'],
            'committer_commits': ['exact']
        }
        interfaces = (relay.Node,)


# GraphQL for GitHub Profile
class GitHubProfileNode(DjangoObjectType):
    class Meta:
        model = GitHubProfile
        filter_fields = {
            'name': ['exact']
        }
        interfaces = (relay.Node,)


class LinkedinProfileNode(DjangoObjectType):
    class Meta:
        model = LinkedinProfile
        filter_fields = {
            'name': ['exact']
        }
        interfaces = (relay.Node,)


# ==========
# Mutations
# ==========


# Mutation for github
# GraphQL Mutation to get commits using user and repo names
class GetGithub(relay.ClientIDMutation):
    class Input:
        user_name = graphene.String(required=True)

    profile = graphene.Field(GitHubProfileNode)

    # https://docs.graphene-python.org/en/latest/relay/mutations/

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        user_name = input['user_name']
        profile = get_profile(user_name)
        return GetGithub(profile=profile)


class GetLinkedin(relay.ClientIDMutation):
    class Input:
        url = graphene.String(required=True)

    profile = graphene.Field(LinkedinProfileNode)

    # https://docs.graphene-python.org/en/latest/relay/mutations/

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        url = input['url']
        profile = get_linkedin_profile(url)
        return GetLinkedin(profile=profile)


# Queries for the endpoint
class Query(ObjectType):
    person = relay.Node.Field(PersonNode)
    all_people = DjangoFilterConnectionField(PersonNode)

    github_profile = relay.Node.Field(GitHubProfileNode)
    all_github_profiles = DjangoFilterConnectionField(GitHubProfileNode)
    # To add support for multiple people queries


# Mutations changes the DB
class Mutation(ObjectType):
    get_github = GetGithub.Field()
    get_linkedin = GetLinkedin.Field()
    pass
