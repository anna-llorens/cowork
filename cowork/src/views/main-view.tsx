import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledMainView = styled.div`
  margin-left: "2rem";
`;
export const MainView = () => {
  return <Outlet />;
};
