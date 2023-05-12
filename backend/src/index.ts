import { ApolloServer } from "apollo-server";
import { schema } from "./schema";
import { context } from "./context";
export const server = new ApolloServer({
  schema,
  context,
});

const port = 4001;

server.listen({ port }).then(({ url }) => {
  console.info(`🚀  Server ready at ${url}`);
});
