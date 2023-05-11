import styled from "styled-components";
import { spaceM } from "../../utils";

export const StyledHeader = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: ${spaceM};
  //box-container
  padding: 20px;
  border: 1px solid $gray-1;
  border-radius: $space-8;
  background-color: $white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

export const Header = () => {
  return <StyledHeader>holaa</StyledHeader>;
};
