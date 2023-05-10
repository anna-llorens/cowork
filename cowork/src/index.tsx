import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ProSidebarProvider } from "react-pro-sidebar";
import { router } from "./routes";
import { RouterProvider } from "react-router-dom";

const GRAPHQL_API = "http://localhost:3000";
const client = new ApolloClient({
  uri: GRAPHQL_API,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ProSidebarProvider>
        <RouterProvider router={router} />
      </ProSidebarProvider>
    </ApolloProvider>
  </React.StrictMode>
);
