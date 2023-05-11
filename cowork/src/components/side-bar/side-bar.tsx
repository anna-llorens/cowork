import { Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { RegisterCoworkModal } from "../modals";
import { useState } from "react";
import { AUTH_TOKEN } from "../../utils";
import { MenuItem } from "./menu-item";
import { ManageLocationsItem } from "./manage-locations-item";

export const SideBar = () => {
  const navigate = useNavigate();
  const { collapseSidebar } = useProSidebar();
  const [openAddLocation, setOpenAddLocation] = useState(false);
  const handleCloseLocationModal = () => setOpenAddLocation(false);

  return (
    <>
      <Sidebar width="350px" style={{ height: "100vh" }}>
        <MenuItem
          ItemIcon={MenuOutlinedIcon}
          onItemClick={() => collapseSidebar()}
          children={<h2>Admin</h2>}
        />

        <MenuItem
          ItemIcon={HomeOutlinedIcon}
          title="Home"
          onItemClick={() => navigate("home")}
        />

        <ManageLocationsItem />

        <MenuItem
          onItemClick={() => setOpenAddLocation(true)}
          ItemIcon={AddLocationAltOutlinedIcon}
          title="Add Location"
        />

        <MenuItem
          ItemIcon={AccountCircleIcon}
          title="My profile"
          onItemClick={() => navigate("my-profile")}
        />

        <MenuItem
          ItemIcon={LiveHelpOutlinedIcon}
          title="FAQ"
          onItemClick={() => navigate("faq")}
        />

        <MenuItem
          ItemIcon={LogoutIcon}
          title="Logout"
          onItemClick={() => {
            localStorage.setItem(AUTH_TOKEN, "");
            navigate("login");
          }}
        />
      </Sidebar>
      <RegisterCoworkModal
        isOpen={openAddLocation}
        handleClose={handleCloseLocationModal}
      />
    </>
  );
};
