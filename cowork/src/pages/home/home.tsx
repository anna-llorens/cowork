import * as React from "react";

import { AUTH_TOKEN } from "../../constants";
import { SideBar } from "../../components/side-bar/side-bar";
import { Logout } from "../logout";

export const Home = () => {
  const authToken = localStorage.getItem(AUTH_TOKEN);
  return <>{!authToken ? <Logout /> : <SideBar />}</>;
};
