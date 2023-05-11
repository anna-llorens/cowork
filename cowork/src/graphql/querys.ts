import { gql } from "@apollo/client";

export const GET_LOCATIONS = gql`
  query GetLocations {
    coworks {
      id
      companyName
      web
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

export const GET_COWORKS = gql`
  {
    coworks {
      id
      url
      description
    }
  }
`;
