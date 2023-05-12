import styled from "styled-components";
import { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Circle = styled.span`
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid #9ba4b5;
  width: 30px;
  height: 30px;
  animation: ${spin} 2s linear infinite;
`;

const Container = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 60px;
`;

export const Loading = () => {
  return (
    <Container>
      <Circle />
    </Container>
  );
};
