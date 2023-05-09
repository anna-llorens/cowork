import { Cowork, Person } from "./types.js";

export const users: Person[] = [
  {
    name: "Anna",
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
    companyName: "Coworking together",
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
    id: "cowork-id-1",
    companyName: "My space",
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
