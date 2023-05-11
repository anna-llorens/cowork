import { Menu, MenuItem as MenuItemMUI } from "react-pro-sidebar";

export const MenuItem: React.FC<{
  show?: boolean;
  ItemIcon?: any;
  onItemClick: () => void;
  title?: string;
  children?: any;
}> = ({ onItemClick, ItemIcon, title = "", ...props }) => (
  <Menu>
    <MenuItemMUI icon={<ItemIcon />} onClick={onItemClick}>
      {title ? title : null}
      {props?.children}
    </MenuItemMUI>
  </Menu>
);
