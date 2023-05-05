import { createBrowserRouter } from "react-router-dom";

import { Locations } from "./pages/locations/locations";
import { Routes } from "./types/types";
import { Home } from "./pages/home/home";
import Login from "./components/login";
import { SideBar } from "./components/side-bar/side-bar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: Routes.Locations,
    element: <Locations />,
  },
  {
    path: Routes.Register,
    element: <SideBar />,
  },
  {
    path: Routes.login,
    element: <Login />,
  },
  {
    path: Routes.me,
    element: <div>aaa</div>,
  },
]);
