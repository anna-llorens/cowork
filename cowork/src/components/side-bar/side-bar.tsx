import { Sidebar } from "react-pro-sidebar";
import { AddLocation, ManageLocations, MainItem } from "./menu-items";

export const SideBar = () => (
  <Sidebar width="350px" style={{ height: "100vh" }}>
    <MainItem />
    <ManageLocations />
    <AddLocation />
  </Sidebar>
);
