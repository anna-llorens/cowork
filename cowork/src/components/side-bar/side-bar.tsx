import { Sidebar } from "react-pro-sidebar";

import { AddLocation } from "./menu-items/add-location-item";
import { ManageLocations } from "./menu-items/manage-locations-item";

import { MenuItem } from "./menu-items/menu-item";

export const SideBar = () => {
  return (
    <>
      <div style={{ height: "100vh", display: "flex" }}>
        <Sidebar style={{ height: "100vh" }}>
          <MenuItem />
          <ManageLocations />
          <AddLocation />
        </Sidebar>

        <main>
          <h1 style={{ color: "black", marginLeft: "5rem" }}>HOME</h1>
        </main>
      </div>
    </>
  );
};
