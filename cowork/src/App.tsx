import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Locations } from "./pages/locations/Locations";
import { Inview } from "./pages/inview/Inview";

const router = createBrowserRouter([
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
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
