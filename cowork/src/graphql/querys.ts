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

export const SEARCH_QUERY = gql`
  query FeedSearchQuery($filter: String!) {
    coworks(filter: $filter) {
      id
      url
      description
      createdAt
      postedBy {
        id
        name
      }
    }
  }
`;
