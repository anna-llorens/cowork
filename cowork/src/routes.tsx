import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, Home, Locations, Login } from "./pages";
import { Routes } from "./types/types";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "locations/:locationId",
        element: <div>Need to update content dinamically [wip]</div>,
      },
    ],
  },
  {
    path: Routes.Locations,
    element: <Locations />,
  },
  {
    path: Routes.Login,
    element: <Login />,
  },
]);
