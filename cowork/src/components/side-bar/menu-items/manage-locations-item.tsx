import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";

const locations = [
  { locationName: "Barcelona cowork" },
  { locationName: "Barcelona cowork Diagonal" },
];
// TODO when user click on the item open Location view
export const ManageLocations = () => {
  return locations.length ? (
    <Menu>
      <SubMenu
        icon={<HomeOutlinedIcon />}
        label="Manage locations"
        defaultOpen={false}
      >
        {locations.map((menuItem, index) => (
          <MenuItem
            key={index}
            icon={<PeopleOutlinedIcon />}
            onClick={() => console.log("TODO")}
          >
            {menuItem.locationName}
          </MenuItem>
        ))}
      </SubMenu>
    </Menu>
  ) : null;
};
