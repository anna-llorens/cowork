import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Investment } from "./pages/investment/Investment";
import { Inview } from "./pages/inview/Inview";
import { Locations } from "./pages/locations/Locations";
import { OrderComponents } from "./pages/order-components/order-components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/locations",
    element: <Locations />,
  },
  {
    path: "/inview",
    element: <Inview />,
  },
  {
    path: "/order-components",
    element: <OrderComponents />,
  },
  {
    path: "/investment",
    element: <Investment />,
  },
]);
