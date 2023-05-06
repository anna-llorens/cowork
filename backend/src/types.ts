export enum Routes {
  Register = "register",
  Locations = "locations",
  login = "login",
  me = "me",
}

type Address = {
  city?: string;
  postalCode?: string;
  street?: string;
  country: string;
};

export type Person = {
  id: string;
  name: string;
  surname: string;
  email?: string;
  number?: string;
  password: string;
};

export type Cowork = {
  id: string;
  companyName: string;
  web?: string;
  address: Address;
  contact: Person;
};
