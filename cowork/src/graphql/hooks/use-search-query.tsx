import { useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
import { SEARCH_QUERY } from "../querys";

export const useSearchQuery = () => {
  const [executeSearch, { data, loading, error }] = useLazyQuery(SEARCH_QUERY, {
    variables: { filter: "" },
  });
  const searchResults = data?.coworks;
  useEffect(() => {
    executeSearch();
  }, []);
  return { executeSearch, searchResults, loading, error };
};
