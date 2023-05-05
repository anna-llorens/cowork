import * as React from "react";

import Logo from "../../static/png/logo.png";

import { useNavigate } from "react-router-dom";
import { Routes } from "../../types/types";
import { Header } from "./header";
import { Square } from "../../components/square";
import styled from "styled-components";
import { BasicModal } from "../../components/modal/modal";
import { AUTH_TOKEN } from "../../constants";

const SquaresContainer = styled.div`
  margin: 60px 60px;
  display: flex;
  justify-content: space-around;
  gap: 24px;
`;
const Footer = styled.footer`
  height: 300px;
`;

export const Home = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const authToken = localStorage.getItem(AUTH_TOKEN);

  const routeChange = (path: Routes) => {
    navigate(path);
  };
  let anna = true;

  return (
    <>
      {!authToken ? (
        <>
          <Header />
          <SquaresContainer>
            <Square
              label="Loggin/ Signup"
              onclick={() => routeChange(Routes.login)}
            />
            <Square
              label="Look for a coworking space"
              onclick={() => routeChange(Routes.Locations)}
            />
          </SquaresContainer>
          <BasicModal isOpen={open} handleClose={handleClose} />
          <Footer>
            <img alt="logo" src={Logo} />
          </Footer>
        </>
      ) : (
        <div>hola bebe</div>
      )}
    </>
  );
};
