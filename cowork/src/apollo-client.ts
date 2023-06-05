import { setContext } from "@apollo/client/link/context";
import { AUTH_TOKEN } from "./utils";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
export const GRAPHQL_API = "http://localhost:4002";

const httpLink = createHttpLink({
  uri: GRAPHQL_API,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
