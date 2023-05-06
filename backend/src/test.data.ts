import { Cowork, Person } from "./types.js";

export const users: Person[] = [
  {
    name: "anna",
    surname: "Llorens",
    email: "anna@test.com",
    number: "0123456",
    id: "user-id",
    password: "11",
  },
];

export const coworks: Cowork[] = [
  {
    id: "cowork-id",
    companyName: "My cowork location",
    web: "www.google.com",
    address: {
      city: "Barcelona",
      postalCode: "08029",
      country: "Spain",
      street: "Burdeus 22",
    },
    contact: users[0],
  },
  {
    id: "cowork-id",
    companyName: "My cowork location",
    web: "www.google.com",
    address: {
      city: "Barcelona",
      postalCode: "08029",
      country: "Spain",
      street: "Burdeus 22",
    },
    contact: users[0],
  },
];
