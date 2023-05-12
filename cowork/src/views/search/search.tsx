import styled from "styled-components";
import { space3XL, spaceXL } from "../../utils";
import { Map } from "./map";
import { SearchInput } from "../../components/search-input";
import { SearchResults } from "./search-results";
import { SearchProvider } from "../../context/search";

const SearchView = styled.div`
  gap: ${space3XL};
  display: flex;
  flex-direction: column;
  margin: ${spaceXL};
`;

const ResultsContainer = styled.div`
  display: flex;
  gap: ${space3XL};
`;

export const Search = () => {
  return (
    <SearchProvider>
      <SearchView>
        <SearchInput />
        <ResultsContainer>
          <SearchResults />
          <Map />
        </ResultsContainer>
      </SearchView>
    </SearchProvider>
  );
};
