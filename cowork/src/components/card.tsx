import {
  Card as CardMUI,
  CardContent as CardContentMUI,
  CardActions,
} from "@mui/material";
import styled from "styled-components";
import { spaceXL } from "../utils/tokens";

const StyledCard = styled(CardMUI)`
  margin-right: ${spaceXL};
  margin-top: ${spaceXL};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Card = ({ title, cardContent, cardActions }) => {
  return (
    <StyledCard sx={{ minWidth: 350 }}>
      <CardContentMUI sx={{ minHeight: 150 }}>
        <h3>{title}</h3>
        {cardContent}
      </CardContentMUI>
      <CardActions>{cardActions}</CardActions>
    </StyledCard>
  );
};
