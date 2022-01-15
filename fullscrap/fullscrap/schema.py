import graphene
import scrap.schema


class Query(scrap.schema.Query, graphene.ObjectType):
    pass


class Mutations(scrap.schema.Mutation, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutations)
