import "./App.css";
import * as React from "react";

import Logo from "./logo.png";

import { useNavigate } from "react-router-dom";
import { Routes } from "../types/types";
import { BasicModal } from "../components/Modal";

export const Home = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const hello = () => setOpen(false);

  const routeChange = (path: Routes) => {
    navigate(path);
  };
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h2>What would you like to do?</h2>
        </header>
      </div>
      <div className="box">
        <div className="square" onClick={(e) => setOpen(true)}>
          Register new site
        </div>
        <div className="square" onClick={(e) => routeChange(Routes.Locations)}>
          Look for a coworking space
        </div>
      </div>
      <BasicModal isOpen={open} hello={hello} />
      <div className="back">
        <img alt="logo" src={Logo} />
      </div>
    </>
  );
};
