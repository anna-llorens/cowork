export enum Routes {
  Register = "register",
  Coworks = "coworks",
  Login = "login",
  Loading = "loading",
  NewCowork = "new",
  Home = "home",
  MyProfile = "my-profile",
  Faq = "faq",
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

export type Cowork1 = {
  id?: string;
  companyName: string;
  web?: string;
  address: Address;
  contact: Person;
};

export type Cowork = {
  description: string;
  id?: string;
  url: string;
};
