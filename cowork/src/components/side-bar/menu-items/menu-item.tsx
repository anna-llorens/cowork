import { Menu, MenuItem as MenuItemMUI } from "react-pro-sidebar";

export const MenuItem = ({ onItemClick, ItemIcon, title = "", ...props }) => (
  <Menu>
    <MenuItemMUI icon={<ItemIcon />} onClick={onItemClick}>
      {title ? title : null}
      {props?.children}
    </MenuItemMUI>
  </Menu>
);
