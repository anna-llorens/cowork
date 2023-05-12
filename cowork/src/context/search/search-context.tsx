import { createContext, useCallback, useEffect, useState } from "react";
import { useSearchQuery } from "../../graphql/hooks";
import { Cowork } from "../../utils";
import { ApolloError } from "@apollo/client";

type SearchContextType = {
  results?: Cowork[];
  loading?: boolean;
  searchLocations?: any;
  error?: ApolloError;
};

export const SearchContext = createContext<SearchContextType>({});

export const SearchProvider = ({ children }: any) => {
  const { executeSearch, searchResults, loading, error } = useSearchQuery();
  const [results, setSearchResults] = useState([]);

  const updateSearchResults = useCallback(() => {
    if (searchResults) {
      setSearchResults(searchResults);
    }
  }, [searchResults]);

  useEffect(() => {
    updateSearchResults();
  }, [searchResults, updateSearchResults]);

  const searchLocations = (searchTerm: string) => {
    setSearchResults([]);
    executeSearch({ variables: { filter: searchTerm } });
    updateSearchResults();
  };

  return (
    <SearchContext.Provider
      value={{
        results,
        loading,
        searchLocations,
        error,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
