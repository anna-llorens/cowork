import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useProSidebar } from "react-pro-sidebar";
import { MenuItem } from "./menu-item";

export const MainItem = () => {
  const { collapseSidebar } = useProSidebar();
  return (
    <MenuItem ItemIcon={MenuOutlinedIcon} onItemClick={() => collapseSidebar()}>
      <h2>Admin</h2>
    </MenuItem>
  );
};
