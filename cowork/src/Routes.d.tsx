import { createBrowserRouter } from "react-router-dom";

import { Locations } from "./pages/locations/locations";
import { Routes } from "./types/types";
import { Home } from "./pages/home/home";

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
    element: <div>aa</div>,
  },
]);
