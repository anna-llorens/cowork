import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { coworks, users } from "./test.data.js";
// var bcrypt = require("bcryptjs");
// var jwt = require("jsonwebtoken");
const APP_SECRET = "GraphQL-is-aw3some";

// TODO add token
// TODO persist user info
async function signup(person) {
  users.push(person);
  return {
    token: "ss",
    person,
  };
}
async function addCowork(cowork) {
  // TODO only auth users can add
  if (cowork.user.id === users[0].id) {
    coworks.push(cowork);
  }

  return coworks;
}
async function coworksByUser(id) {
  const userSpaces = coworks.filter((cowork) => cowork.contact.id === id);
  return userSpaces;
}

const resolvers = {
  Query: {
    coworks: () => coworks,
    coworksByUser: (parent, args) => {
      return coworksByUser(args.user);
    },
  },
  Mutation: {
    addCowork: (parent, args) => {
      return addCowork(args.cowork);
    },
    signup: (parent, args) => {
      return signup(args);
    },
  },
};

const typeDefs = `#graphql
  input CoworkInput {
    companyName: String!
    web: String
    address: InputAddress
    contact: InputPerson
  }
  type Cowork {
    id: ID!
    companyName: String!
    web: String
    address: Address
    contact: Person!
  }

  input InputAddress {
    city: String
    postalCode: String
    country: String
    street: String
  }

  input InputPerson {
    name: String!
    surname: String!
    email: String!
    number: String!
  }
  type Address {
    city: String
    postalCode: String
    country: String
    street: String
  }

  type Person {
    id: ID!
    name: String!
    surname: String
    email: String!
    number: String
    password: String
    coworks: [Cowork]
  }
  type AuthPayload {
    person: Person
    token: String
  }

  type Query {
    coworks: [Cowork]
  }

  type Query {
  coworksByUser(user: String): String
}

  type Mutation {
    addCowork(cowork: CoworkInput):[Cowork]
    signup(email: String! password: String! name: String!
  ): AuthPayload

  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
