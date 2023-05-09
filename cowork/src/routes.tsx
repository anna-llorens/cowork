import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, Home, Login, LocationView } from "./pages";
import { Routes } from "./utils/types";

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
]);
