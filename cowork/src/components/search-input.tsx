import styled from "styled-components";
import { gray01, spaceL, spaceM, spaceXS } from "../utils";
import { useContext, useState } from "react";
import { SearchContext } from "../context/search";

const SearchContainer = styled.div`
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

export const SearchInput = () => {
  const [value, setValue] = useState("");
  const { searchLocations } = useContext(SearchContext);

  const updateSearch = (e) => {
    setValue(e.target.value);
    searchLocations(e.target.value);
  };

  return (
    <SearchContainer>
      <StyledInput
        type="text"
        placeholder="Find a place to work"
        onChange={updateSearch}
        value={value}
      />
    </SearchContainer>
  );
};
