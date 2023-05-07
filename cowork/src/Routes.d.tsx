import { createBrowserRouter } from "react-router-dom";
import { Home, Locations, Login } from "./pages";
import { Routes } from "./types/types";

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
    path: Routes.Login,
    element: <Login />,
  },
  {
    path: Routes.Me,
    element: <div>About me</div>,
  },
]);
