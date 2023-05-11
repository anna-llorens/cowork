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
import { useLocalStorage } from "../../hooks";
import { useAuth } from "../../hooks/use-auth";
import { useUser } from "../../hooks/use-user";

export const SideBar = () => {
  const navigate = useNavigate();
  const { collapseSidebar } = useProSidebar();
  const { setItem } = useLocalStorage();
  const { logout } = useAuth();
  const [openAddLocation, setOpenAddLocation] = useState(false);
  const handleCloseLocationModal = () => setOpenAddLocation(false);
  const { user } = useUser();
  // TODO fix user

  return (
    <>
      <Sidebar width="350px" style={{ height: "100vh" }}>
        <MenuItem
          ItemIcon={MenuOutlinedIcon}
          onItemClick={() => collapseSidebar()}
          children={<h3>{user?.name}</h3>}
        />

        <MenuItem
          ItemIcon={HomeOutlinedIcon}
          onItemClick={() => navigate("home")}
          title="Home"
        />

        <ManageLocationsItem />

        <MenuItem
          ItemIcon={AddLocationAltOutlinedIcon}
          onItemClick={() => setOpenAddLocation(true)}
          title="Add Location"
        />

        <MenuItem
          ItemIcon={AccountCircleIcon}
          onItemClick={() => navigate("my-profile")}
          title="My profile"
        />

        <MenuItem
          ItemIcon={LiveHelpOutlinedIcon}
          onItemClick={() => navigate("faq")}
          title="FAQ"
        />

        <MenuItem
          ItemIcon={LogoutIcon}
          onItemClick={() => {
            setItem(AUTH_TOKEN, "");
            logout();
            navigate("login");
          }}
          title="Logout"
        />
      </Sidebar>
      <RegisterCoworkModal
        isOpen={openAddLocation}
        handleClose={handleCloseLocationModal}
      />
    </>
  );
};
