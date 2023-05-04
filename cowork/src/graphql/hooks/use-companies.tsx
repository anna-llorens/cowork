import { useQuery } from "@apollo/client";
import { GET_LOCATIONS } from "../querys";

export const useCompanies = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  return { loading, error, data };
};
