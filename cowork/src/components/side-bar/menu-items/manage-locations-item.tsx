import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";

const locations = [
  { locationName: "Barcelona cowork" },
  { locationName: "Barcelona cowork Diagonal" },
];

export const ManageLocations = () => {
  return (
    <Menu>
      <SubMenu
        icon={<HomeOutlinedIcon />}
        label="Manage locations"
        defaultOpen={false}
      >
        {locations
          ? locations.map((locationName, index) => (
              <MenuItem key={index} icon={<PeopleOutlinedIcon />}>
                {locationName.locationName}
              </MenuItem>
            ))
          : null}
      </SubMenu>
    </Menu>
  );
};
