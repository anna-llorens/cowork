import styled from "styled-components";

const StyledSquare = styled.div`
  width: 300px;
  height: 200px;
  background-color: gray;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  text-align: center;
  :hover {
    cursor: pointer;
    background-color: rgb(32, 32, 32);
  }
`;

export const Square = ({ label, onclick }) => {
  return <StyledSquare onClick={onclick}>{label}</StyledSquare>;
};
