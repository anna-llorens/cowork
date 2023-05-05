import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import {
  Menu,
  MenuItem as MenuItemMUI,
  useProSidebar,
} from "react-pro-sidebar";

export const MenuItem = () => {
  const { collapseSidebar } = useProSidebar();
  return (
    <Menu>
      <MenuItemMUI
        icon={<MenuOutlinedIcon />}
        onClick={() => {
          collapseSidebar();
        }}
        style={{ textAlign: "center" }}
      >
        {" "}
        <h2>Admin</h2>
      </MenuItemMUI>
    </Menu>
  );
};
