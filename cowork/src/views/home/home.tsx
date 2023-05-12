import * as React from "react";

import { SideBar } from "../../components/side-bar/side-bar";
import { LocationsContextProvider } from "../../context/locations";
import { MainView } from "../main-view";
import styled from "styled-components";
import { Login } from "../login";

const HomeContainer = styled.div`
  display: flex;
`;

export const Home = () => {
  //TODO add auth
  let showLogIn = false;

  return (
    <>
      {showLogIn ? (
        <Login />
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
