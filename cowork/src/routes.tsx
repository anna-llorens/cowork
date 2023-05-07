import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, Home, Locations, Login, ManageLocation } from "./pages";
import { Routes } from "./utils/types";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "locations/:locationId",
        element: <ManageLocation />,
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
