import { gql } from "@apollo/client";

export const GET_LOCATIONS = gql`
  query GetLocations {
    coworks {
      id
      companyName
      address {
        city
        street
        postalCode
        country
      }
      contact {
        name
        surname
      }
    }
  }
`;
