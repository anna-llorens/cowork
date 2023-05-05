import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// var bcrypt = require("bcryptjs");
// var jwt = require("jsonwebtoken");
const APP_SECRET = "GraphQL-is-aw3some";

const coworks = [
  {
    companyName: "Amazon",
    web: "www.google.com",
    address: {
      city: "Barcelona",
      postalCode: "08029",
      country: "Spain",
      street: "Burdeus 22",
    },
    contact: {
      name: "Anna",
      surname: "Llorens",
      email: "anna@test.com",
      number: "0123456",
    },
  },
];

let users = [];
// TODO add token
// TODO persist user info
async function signup(person) {
  users.push(person);
  return {
    token: "ss",
    person,
  };
}

const resolvers = {
  Query: {
    coworks: () => coworks,
  },
  Mutation: {
    addCowork: (parent, args) => {
      coworks.push(args.cowork);
      return coworks;
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
    contact: Person
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
