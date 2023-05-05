import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  SubMenu,
} from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { BasicModal } from "../modal/modal";

export const SideBar = () => {
  const { collapseSidebar } = useProSidebar();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div id="app" style={{ height: "100vh", display: "flex" }}>
        <Sidebar style={{ height: "100vh", width: "300px" }}>
          <Menu>
            <MenuItem
              icon={<MenuOutlinedIcon />}
              onClick={() => {
                collapseSidebar();
              }}
              style={{ textAlign: "center" }}
            >
              <h2>David Smith</h2>
            </MenuItem>
            <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
            <MenuItem icon={<AddIcon />} onClick={() => setOpen(true)}>
              Add new location
            </MenuItem>
            <SubMenu icon={<HomeOutlinedIcon />} label="Manage locations">
              <MenuItem icon={<PeopleOutlinedIcon />}>
                Coworking Barcelona
              </MenuItem>
            </SubMenu>

            <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
            <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
            <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
          </Menu>
        </Sidebar>
        <BasicModal isOpen={open} handleClose={handleClose} />
        <main>
          <h1 style={{ color: "black", marginLeft: "5rem" }}>HOME</h1>
        </main>
      </div>
    </>
  );
};
