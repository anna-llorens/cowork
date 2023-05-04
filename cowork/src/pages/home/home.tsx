import * as React from "react";

import Logo from "./logo.png";

import { useNavigate } from "react-router-dom";
import { Routes } from "../../types/types";
import { Header } from "./header";
import { Square } from "../../components/square";
import styled from "styled-components";
import { BasicModal } from "../../components/modal/modal";

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

  const routeChange = (path: Routes) => {
    navigate(path);
  };
  return (
    <>
      <Header />
      <SquaresContainer>
        <Square label="Register new site" onclick={() => setOpen(true)} />
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
  );
};
