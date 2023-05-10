import { extendType, nonNull, objectType, stringArg } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen";
let coworks: NexusGenObjects["Cowork"][] = [
  {
    id: 1,
    url: "www.howtographql.com",
    description: "Fullstack tutorial for GraphQL",
  },
  {
    id: 2,
    url: "graphql.org",
    description: "GraphQL official website",
  },
];

export const Cowork = objectType({
  name: "Cowork",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("description");
    t.nonNull.string("url");
    t.field("postedBy", {
      type: "User",
      resolve(parent, args, context) {
        return context.prisma.cowork
          .findUnique({ where: { id: parent.id } })
          .postedBy();
      },
    });
  },
});

export const CoworkMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("post", {
      type: "Cowork",
      args: {
        description: nonNull(stringArg()),
        url: nonNull(stringArg()),
      },
      resolve(parent, args, context) {
        const { description, url } = args;
        const { userId } = context;

        if (!userId) {
          // 1
          throw new Error("Cannot post without logging in.");
        }

        const newCowork = context.prisma.cowork.create({
          data: {
            description,
            url,
            postedBy: { connect: { id: userId } }, // 2
          },
        });

        return newCowork;
      },
    });
  },
});

export const CoworkQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("coworks", {
      type: "Cowork",
      resolve(parent, args, context) {
        return context.prisma.cowork.findMany();
      },
    });
  },
});
