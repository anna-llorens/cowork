import { User } from "@prisma/client";
import { objectType, extendType, nonNull, intArg } from "nexus";

export const Vote = objectType({
  name: "Vote",
  definition(t) {
    t.nonNull.field("cowork", { type: "Cowork" });
    t.nonNull.field("user", { type: "User" });
    t.dateTime("time");
  },
});

export const VoteMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("vote", {
      type: "Cowork",
      args: {
        linkId: nonNull(intArg()),
      },

      async resolve(parent, args, context) {
        const { userId } = context;
        const { linkId } = args;

        if (!userId) {
          throw new Error("Cannot vote without logging in.");
        }

        const cowork = await context.prisma.cowork.update({
          where: {
            id: linkId,
          },
          data: {
            voters: {
              connect: {
                id: userId,
              },
            },
          },
        });

        const user = await context.prisma.user.findUnique({
          where: { id: userId },
        });

        return {
          cowork,
          user: user as User,
        };
      },
    });
  },
});
