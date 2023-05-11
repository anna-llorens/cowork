import { createBrowserRouter } from "react-router-dom";
import {
  ErrorPage,
  Home,
  Login,
  LocationView,
  Loading,
  Search,
  MyProfile,
} from "./pages";
import { Routes } from "./utils/types";
import { Coworks } from "./pages/coworks";
import AddCowrk from "./components/modals/add-cowork";

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
      {
        path: Routes.Home,
        element: <Search />,
      },
      {
        path: Routes.MyProfile,
        element: <MyProfile />,
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
  {
    path: Routes.NewCowork,
    element: <AddCowrk />,
  },
  {
    path: Routes.Faq,
    element: <AddCowrk />,
  },
]);
