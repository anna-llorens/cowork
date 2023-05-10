import { Cowork, Person } from "./types.js";

export const users: Person[] = [
  {
    name: "Will",
    surname: "Smith",
    email: "anna@test.com",
    number: "0123456",
    id: "user-id",
    password: "11",
  },
];

export const coworks: Cowork[] = [
  {
    id: "cowork-id",
    companyName: "Coworking together",
    web: "www.cowork-togheter.com",
    address: {
      city: "Mainland",
      postalCode: "08029",
      country: "US",
      street: "Burrier street",
    },
    contact: users[0],
  },
  {
    id: "cowork-id-1",
    companyName: "My space",
    web: "www.myspace-cowork.com",
    address: {
      city: "Madrid",
      postalCode: "04004",
      country: "Spain",
      street: "Rosario 23",
    },
    contact: users[0],
  },
];
