import { useLazyQuery } from "@apollo/client";
import { SEARCH_QUERY } from "../../graphql/querys";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { CoworkCard } from "../../components/cards";
import { space3XL, spaceXL, spaceXXL } from "../../utils";
import { Loading } from "../loading";
import { Map } from "./map";

const SearchView = styled.div`
  justify-content: space-around;
  gap: ${space3XL};
  display: flex;
  flex-direction: column;
  margin: ${spaceXXL};
`;

const ResultsContainer = styled.div`
  display: flex;
  gap: ${space3XL};
`;
const MapContainer = styled.div`
  margin-bottom: 24px;
`;

const CoworkList = styled.div`
  max-height: 90vh;
  overflow-y: auto;
  width: 450px;
`;

const SearchCountResults = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 400px;
  margin-right: ${spaceXL};
`;

const SearchInputContainer = styled.div``;

export const Search = () => {
  const [searchFilter, setSearchFilter] = useState("");
  const [executeSearch, { data, loading }] = useLazyQuery(SEARCH_QUERY);
  const [coworks, setCoworks] = useState(data?.coworks);

  useEffect(() => {
    executeSearch({ variables: { filter: searchFilter } });
    setCoworks(data?.coworks);
  }, [searchFilter, data?.coworks, executeSearch]);

  return (
    <>
      <SearchView>
        <SearchInputContainer>
          Search{" "}
          <input
            type="text"
            onChange={(e) => setSearchFilter(e.target.value)}
          />
          {loading && <Loading />}
          {coworks?.length && (
            <SearchCountResults>{coworks?.length} results</SearchCountResults>
          )}
        </SearchInputContainer>

        <ResultsContainer>
          <CoworkList>
            {coworks &&
              coworks.map((link, index) => (
                <CoworkCard
                  key={link.id}
                  url={link.url}
                  description={link.description}
                />
              ))}
          </CoworkList>
          <MapContainer>
            <Map />
          </MapContainer>
        </ResultsContainer>
      </SearchView>
    </>
  );
};
