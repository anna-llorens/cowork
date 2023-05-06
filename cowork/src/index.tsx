import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ProSidebarProvider } from "react-pro-sidebar";
const GRAPHQL_API = "http://localhost:4000";

const client = new ApolloClient({
  uri: GRAPHQL_API,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ProSidebarProvider>
        <App />
      </ProSidebarProvider>
    </ApolloProvider>
  </React.StrictMode>
);
