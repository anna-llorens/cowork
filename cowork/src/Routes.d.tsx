import { createBrowserRouter } from "react-router-dom";
import { Home, Locations, Login } from "./pages";
import { Routes } from "./types/types";
import { SideBar } from "./components";

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
    path: Routes.Login,
    element: <Login />,
  },
  {
    path: Routes.Me,
    element: <div>About me</div>,
  },
]);
