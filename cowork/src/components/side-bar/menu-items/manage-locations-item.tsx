import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import { useContext } from "react";

import { LocationsContext } from "../../../context/locations";
import { RoutePath } from "../../../utils/types";
import { Link } from "react-router-dom";

export const ManageLocations = () => {
  const { locations } = useContext(LocationsContext);

  return locations?.length ? (
    <Menu>
      <SubMenu
        icon={<HomeOutlinedIcon />}
        label="Manage locations"
        defaultOpen={false}
      >
        {locations.map((cowork) => (
          <MenuItem
            key={cowork.id}
            icon={<PeopleOutlinedIcon />}
            component={<Link to={`${RoutePath.locations}${cowork.id}`} />}
          >
            {cowork.companyName}
          </MenuItem>
        ))}
      </SubMenu>
    </Menu>
  ) : null;
};
