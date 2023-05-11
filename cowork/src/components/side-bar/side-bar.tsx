import { Sidebar } from "react-pro-sidebar";
import { AddLocation, ManageLocations, MainItem } from "./menu-items";
import { Home } from "./menu-items/home";
import { Logout } from "./menu-items/logout-item";
import { MyProfileItem } from "./menu-items/my-profile-item";
import { FaqItem } from "./menu-items/faq-item";

export const SideBar = () => (
  <Sidebar width="350px" style={{ height: "100vh" }}>
    <MainItem />
    <Home />
    <ManageLocations />
    <AddLocation />
    <MyProfileItem />
    <FaqItem />
    <Logout />
  </Sidebar>
);
