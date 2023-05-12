import styled from "styled-components";
import { gray01, spaceL, spaceS, spaceXS } from "../utils";
import { useContext, useState } from "react";
import { SearchContext } from "../context/search";

const Search = styled.div`
  width: 100%;
  display: flex;
  min-width: 200px;
`;

const StyledInput = styled.input`
  border: 1px solid transparent;
  background-color: ${gray01};
  padding: 10px;
  font-size: ${spaceL};
  border-radius: ${spaceXS};
  background-color: ${gray01};
  width: 100%;
`;

const ResultCount = styled.div`
  margin-top: ${spaceS};
`;

export const SearchInput = () => {
  const [value, setValue] = useState("");
  const { searchLocations, results } = useContext(SearchContext);

  const updateSearch = (e) => {
    setValue(e.target.value);
    searchLocations(e.target.value);
  };

  return (
    <div>
      <Search>
        <StyledInput
          type="text"
          placeholder="Find a place to work"
          onChange={updateSearch}
          value={value}
        />
      </Search>
      <ResultCount>{results?.length} results</ResultCount>
    </div>
  );
};
