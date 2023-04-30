import { RouterProvider } from "react-router-dom";

import { router } from "./Routes.d";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
