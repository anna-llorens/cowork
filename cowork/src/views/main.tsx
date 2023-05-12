import { SideBar } from "../components/side-bar/side-bar";
import { LocationsContextProvider } from "../context/locations";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const MainViewContainer = styled.div`
  display: flex;
`;

export const Main = () => (
  <LocationsContextProvider>
    <MainViewContainer>
      <SideBar />
      <Outlet />
    </MainViewContainer>
  </LocationsContextProvider>
);
