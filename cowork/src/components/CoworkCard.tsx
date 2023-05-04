import styled from "styled-components";
import { Cowork } from "../types/types";

const StyledCard = styled.div`
  background-color: rgb(54, 54, 240);
  color: white;
  margin: 20px;
  border-radius: 12px;
  padding: 4px;
  width: 600px;
  min-height: 60px;
  text-align: center;
`;

export const CoworkCard = ({ cowork }: { cowork?: Cowork }) => {
  return (
    <StyledCard>
      <span>{cowork?.companyNams}</span> - <span>{cowork?.address?.city}</span>
    </StyledCard>
  );
};
