import {
  extendType,
  nonNull,
  objectType,
  stringArg,
  intArg,
  inputObjectType,
  enumType,
  arg,
  list,
} from "nexus";

import { Prisma } from "@prisma/client";

export const Cowork = objectType({
  name: "Cowork",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("companyName");
    t.nonNull.string("description");
    t.nonNull.string("url");
    t.nonNull.dateTime("createdAt");
    t.field("postedBy", {
      type: "User",
      resolve(parent, args, context) {
        return context.prisma.cowork
          .findUnique({ where: { id: parent.id } })
          .postedBy();
      },
    });
    t.nonNull.list.nonNull.field("voters", {
      type: "User",
      resolve(parent, args, context) {
        return context.prisma.cowork
          .findUnique({ where: { id: parent.id } })
          .voters();
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
        companyName: nonNull(stringArg()),
      },
      resolve(parent, args, context) {
        const { description, url, companyName } = args;
        const { userId } = context;

        if (!userId) {
          throw new Error("Cannot post without logging in.");
        }

        const newCowork = context.prisma.cowork.create({
          data: {
            description,
            url,
            postedBy: { connect: { id: userId } },
            companyName,
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
    t.nonNull.field("feed", {
      type: "Feed",
      args: {
        filter: nonNull(stringArg()),
        skip: intArg(),
        take: intArg(),
        orderBy: arg({ type: list(nonNull(CoworkOrderByInput)) }),
      },
      async resolve(parent, args, context) {
        const where = args.filter
          ? {
              OR: [
                { description: { contains: args.filter } },
                { url: { contains: args.filter } },
              ],
            }
          : {};

        const coworks = await context.prisma.cowork.findMany({
          where,
          skip: args?.skip as number | undefined,
          take: args?.take as number | undefined,
          orderBy: args?.orderBy as
            | Prisma.Enumerable<Prisma.CoworkOrderByWithRelationInput>
            | undefined,
        });

        const count = await context.prisma.cowork.count({ where });
        const id = `main-feed:${JSON.stringify(args)}`;

        return {
          coworks,
          count,
          id,
        };
      },
    });
  },
});

export const CoworkOrderByInput = inputObjectType({
  name: "CoworkOrderByInput",
  definition(t) {
    t.field("description", { type: Sort });
    t.field("url", { type: Sort });
    t.field("createdAt", { type: Sort });
    t.field("companyName", { type: Sort });
  },
});

export const Sort = enumType({
  name: "Sort",
  members: ["asc", "desc"],
});

export const Feed = objectType({
  name: "Feed",
  definition(t) {
    t.nonNull.list.nonNull.field("coworks", { type: Cowork });
    t.nonNull.int("count");
    t.id("id");
  },
});
