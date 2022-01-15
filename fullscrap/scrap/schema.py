import graphene
from graphene import relay, ObjectType, Schema
from graphene_django import DjangoObjectType
from .models import Person, GitHubProfile
from .services import get_profile


# Node is a Type for GraphQL
class PersonNode(DjangoObjectType):
    class Meta:
        model = Person
        filter_fields = {
            'name': ['exact', 'icontains', 'istartswith'],
            'email': ['exact', 'icontains'],
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


# Queries for the endpoint
class Query(ObjectType):
    person = relay.Node.Field(PersonNode)
    # To add support for multiple people queries
    # people = DjangoFilterConnectionField(AuthorNode)


# Mutations changes the DB
class Mutation(ObjectType):
    get_github = GetGithub.Field()
    pass




