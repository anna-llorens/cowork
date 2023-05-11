import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { ProSidebarProvider } from "react-pro-sidebar";
import { router } from "./routes";
import { RouterProvider } from "react-router-dom";
import { client } from "./apollo-client";
import { ApolloProvider } from "@apollo/client";
import { UserContextProvider } from "./context/template";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserContextProvider>
      <ApolloProvider client={client}>
        <ProSidebarProvider>
          <RouterProvider router={router} />
        </ProSidebarProvider>
      </ApolloProvider>
    </UserContextProvider>
  </React.StrictMode>
);
