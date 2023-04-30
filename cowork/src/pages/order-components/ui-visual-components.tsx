import styled from "styled-components";

const StyledSquare = styled.div<SquareProps>`
  order: ${(props) => props.$order};
  width: 300px;
  height: 70px;
  margin: 20px;
  background-color: #76baf5;
`;

type SquareProps = {
  $order: number;
  rest?: any;
  children?: React.ReactNode;
};

export const Square = ({ $order, children, ...rest }: SquareProps) => (
  <StyledSquare $order={$order}>
    <div>current order: {$order}</div>
    {children}
  </StyledSquare>
);
