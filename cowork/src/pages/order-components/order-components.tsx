import styled from "styled-components";
import { Square } from "./ui-visual-components";
import { useOrderComponents } from "./use-order-componets";

const SquareContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OrderComponents = () => {
  const { order } = useOrderComponents();
  return (
    <>
      <div>Order components component</div>
      <SquareContainer>
        <Square $order={order.Header}>Real 0 </Square>
        <Square $order={order.SearchAlert}>Real 1 </Square>
        <Square $order={order.Description}>Real 2 </Square>
        <Square $order={order.ContactPoint}>Real 3 </Square>
        <Square $order={order.SalaryRange}>Real 4 </Square>
        <Square $order={order.Feedback}>Real 5 </Square>
        <Square $order={order.CompanyInfo}>Real 6 </Square>
      </SquareContainer>
    </>
  );
};
