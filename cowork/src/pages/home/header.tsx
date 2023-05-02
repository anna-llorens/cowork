import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  background-color: #282c34;
  position: fixed;
  top: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Header = () => (
  <StyledHeader>
    <h2>What would you like to do?</h2>
  </StyledHeader>
);
