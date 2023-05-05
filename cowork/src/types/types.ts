export enum Routes {
  Register = "register",
  Locations = "locations",
  login = "login",
}

type Address = {
  city?: string;
  postalCode?: string;
  street?: string;
  country: string;
};

type ContactPoint = {
  name: string;
  surname: string;
  email?: string;
  number?: string;
};

export type Cowork = {
  companyName: string;
  web?: string;
  address: Address;
  contact: ContactPoint;
};
