export enum Routes {
  Register = "register",
  Locations = "locations",
}

export type Address = {
  city?: string;
  postalCode?: string;
  street?: string;
};

export type Cowork = {
  name: string;
  address: Address;
  web?: string;
};
