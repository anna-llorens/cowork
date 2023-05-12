import { createBrowserRouter } from "react-router-dom";
import * as View from "./views";
import { Routes } from "./utils/types";
import { Coworks } from "./views/coworks";
import AddCowrk from "./components/modals/add-cowork";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <View.Home />,
    errorElement: <View.ErrorPage />,
    children: [
      {
        path: "locations/:locationId",
        element: <View.LocationView />,
      },
      {
        path: Routes.Home,
        element: <View.Search />,
      },
      {
        path: Routes.MyProfile,
        element: <View.MyProfile />,
      },
    ],
  },
  {
    path: Routes.Login,
    element: <View.Login />,
  },
  {
    path: Routes.Loading,
    element: <View.Loading />,
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
