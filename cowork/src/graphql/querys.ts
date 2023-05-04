import { gql } from "@apollo/client";

export const GET_LOCATIONS = gql`
  query GetLocations {
    coworks {
      companyName
      address {
        city
      }
    }
  }
`;
