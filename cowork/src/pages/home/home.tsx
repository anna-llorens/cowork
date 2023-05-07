import * as React from "react";

import { AUTH_TOKEN } from "../../constants";
import { SideBar } from "../../components/side-bar/side-bar";
import { Logout } from "../logout";
import { LocationsContextProvider } from "../../context/locations";
import { MainView } from "../main-view";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
`;
export const Home = () => {
  const authToken = localStorage.getItem(AUTH_TOKEN);
  return (
    <>
      {!authToken ? (
        <Logout />
      ) : (
        <LocationsContextProvider>
          <HomeContainer>
            <SideBar />
            <MainView />
          </HomeContainer>
        </LocationsContextProvider>
      )}
    </>
  );
};
