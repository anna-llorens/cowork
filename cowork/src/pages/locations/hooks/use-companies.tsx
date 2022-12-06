import { gql, useQuery } from "@apollo/client";

const GET_LOCATIONS = gql`
  query GetLocations {
    coworks {
      name
      address {
        city
      }
    }
  }
`;
type Cowork = {
  name: string;
  city: string;
};

export const useCompanies = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  return { loading, error, data };
};
