import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import { useContext } from "react";

import { LocationsContext } from "../../../context/locations";
import { BrowserRouter, Link } from "react-router-dom";

// TODO when user click on the item open Location view
// How to keep sidebar when rederecting
export const ManageLocations = () => {
  const { coworks, setActiveTab } = useContext(LocationsContext);
  console.log(coworks);

  return coworks?.length ? (
    <BrowserRouter>
      <Menu>
        <SubMenu
          icon={<HomeOutlinedIcon />}
          label="Manage locations"
          defaultOpen={false}
        >
          {coworks.map((menuItem, index) => (
            <MenuItem
              key={index}
              icon={<PeopleOutlinedIcon />}
              onClick={() => setActiveTab(menuItem.id)}
              component={<Link to="/me" />}
            >
              {menuItem.companyName}
            </MenuItem>
          ))}
        </SubMenu>
      </Menu>
    </BrowserRouter>
  ) : null;
};
