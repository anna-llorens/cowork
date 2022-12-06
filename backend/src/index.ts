import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const coworks = [
  {
    name: "Amazon",
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
  {
    name: "Google",
    web: "www.google.com",
    address: {
      city: "Madrid",
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
  {
    name: "Facebook",
    web: "www.google.com",
    address: {
      city: "Boston",
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
  {
    name: "Allianz",
    web: "www.google.com",
    address: {
      city: "Tokio",
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
  {
    name: "Spotify",
    web: "www.google.com",
    address: {
      city: "New York",
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
  {
    name: "Apple",
    web: "www.google.com",
    address: {
      city: "Paris",
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
  {
    name: "Tesla",
    web: "www.google.com",
    address: {
      city: "Madrid",
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
  {
    name: "Twitter",
    web: "www.google.com",
    address: {
      city: "London",
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
  {
    name: "Microsoft",
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
  {
    name: "Microsoft",
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
  {
    name: "Microsoft",
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
  {
    name: "Microsoft",
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
  {
    name: "Microsoft",
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
  {
    name: "Microsoft",
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
  {
    name: "Microsoft",
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
  {
    name: "Microsoft",
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
  {
    name: "Microsoft",
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
  {
    name: "Microsoft",
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
  {
    name: "Microsoft",
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

const resolvers = {
  Query: {
    coworks: () => coworks,
  },
  Mutation: {
    addCowork: (parent, args) => {
      coworks.push(args.cowork);
      return coworks;
    },
  },
};

const typeDefs = `#graphql
  input CoworkInput {
    name: String!
    web: String
    address: InputAddress
    contact: InputPerson
  }
  type Cowork {
    name: String!
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
    name: String!
    surname: String!
    email: String!
    number: String!
  }

  type Query {
    coworks: [Cowork]
  }

  type Mutation {
    addCowork(cowork: CoworkInput):[Cowork]
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
