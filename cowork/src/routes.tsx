import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, Home, Login, LocationView, Loading } from "./pages";
import { Routes } from "./utils/types";
import { Coworks } from "./pages/coworks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "locations/:locationId",
        element: <LocationView />,
      },
    ],
  },
  {
    path: Routes.Login,
    element: <Login />,
  },
  {
    path: Routes.Loading,
    element: <Loading />,
  },
  {
    path: Routes.Coworks,
    element: <Coworks />,
  },
]);
