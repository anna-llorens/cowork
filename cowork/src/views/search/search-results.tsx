import styled from "styled-components";
import { useContext } from "react";
import { SearchContext } from "../../context/search";
import { CoworkCard } from "../../components";
import { Loading } from "../loading";

const ResultsContainer = styled.div`
  height: 80vh;
  overflow-y: auto;
  min-width: 760px; // TODO update. Card size
`;

export const SearchResults = () => {
  const { results, loading, error } = useContext(SearchContext);
  if (error) return <ResultsContainer>{error.message}</ResultsContainer>;
  if (loading)
    return (
      <ResultsContainer>
        <Loading />
      </ResultsContainer>
    );
  return (
    <ResultsContainer>
      {results?.map((cowork) => (
        <CoworkCard
          key={cowork.id}
          url={cowork.url}
          description={cowork.companyName}
        />
      ))}
    </ResultsContainer>
  );
};
