import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import EditLocationOutlinedIcon from "@mui/icons-material/EditLocationOutlined";
import { useContext, useState } from "react";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

import { LocationsContext } from "../../../context/locations";
import { RoutePath } from "../../../utils/types";
import { Link } from "react-router-dom";

export const ManageLocations = () => {
  const { getLocations, setActiveTab } = useContext(LocationsContext);
  const [locations, setLocations] = useState(getLocations());

  return locations?.length ? (
    <Menu>
      <SubMenu
        icon={<EditLocationOutlinedIcon />}
        label="Manage locations"
        defaultOpen={false}
      >
        {locations.map((cowork) => (
          <MenuItem
            onClick={() => setActiveTab(cowork.id)}
            key={cowork.id}
            icon={<FmdGoodOutlinedIcon />}
            component={<Link to={`${RoutePath.locations}${cowork.id}`} />}
          >
            {cowork.companyName}
          </MenuItem>
        ))}
      </SubMenu>
    </Menu>
  ) : null;
};
