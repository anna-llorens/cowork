export enum Routes {
  Register = "register",
  Locations = "locations",
  Login = "login",
}

export enum RoutePath {
  locations = "/locations/",
}

export type Address = {
  city?: string;
  postalCode?: string;
  street?: string;
  country: string;
};

export type Person = {
  id?: string;
  name: string;
  surname: string;
  email?: string;
  number?: string;
};

export type Cowork = {
  id?: string;
  companyName: string;
  web?: string;
  address: Address;
  contact: Person;
};
