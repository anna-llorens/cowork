export enum Routes {
  Register = "register",
  Locations = "locations",
}

type Address = {
  city?: string;
  postalCode?: string;
  street?: string;
  country: string;
};

type ContactPoint = {
  name: string;
  surname: Address;
  email?: string;
  phone?: string;
};

export type Cowork = {
  companyNams: string;
  web?: string;
  address: Address;
  contact: ContactPoint;
};
