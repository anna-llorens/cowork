import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Locations } from "./pages/locations/Locations";
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
    path: Routes.Register,
    element: <div>aa</div>,
  },
]);
