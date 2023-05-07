import styled from "styled-components";

import Logo from "../static/png/logo.png";

import { useNavigate } from "react-router-dom";
import { Square } from "../components/square";
import { Routes } from "../utils/types";
import { BasicModal } from "../components/modal/modal";
import { useState } from "react";

const SquaresContainer = styled.div`
  margin: 60px 60px;
  display: flex;
  justify-content: space-around;
  gap: 24px;
`;
const Footer = styled.footer`
  height: 300px;
`;

export const Logout = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const routeChange = (path: Routes) => {
    navigate(path);
  };
  return (
    <>
      <SquaresContainer>
        <Square
          label="Loggin/ Signup"
          onclick={() => routeChange(Routes.Login)}
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
  );
};
