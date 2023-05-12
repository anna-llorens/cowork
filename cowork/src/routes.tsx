import { createBrowserRouter } from "react-router-dom";
import * as View from "./views";
import { Routes } from "./utils/types";
import AddCowrk from "./components/modals/add-cowork";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <View.Main />,
    errorElement: <View.ErrorPage />,
    children: [
      {
        path: Routes.locationId,
        element: <View.EditCoworking />,
      },
      {
        path: Routes.home,
        element: <View.Search />,
      },
      {
        path: Routes.myProfile,
        element: <View.MyProfile />,
      },
    ],
  },
  {
    path: Routes.login,
    element: <View.Login />,
  },
  {
    path: Routes.loading,
    element: <View.Loading />,
  },
  {
    path: Routes.faq,
    element: <AddCowrk />,
  },
]);
