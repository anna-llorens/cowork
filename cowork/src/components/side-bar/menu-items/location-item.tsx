import { MenuItem } from "react-pro-sidebar";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";

export const LocationItem = ({ index, location }) => {
  return (
    <MenuItem
      key={index}
      icon={<PeopleOutlinedIcon />}
      onClick={() => console.log("ckick")}
    >
      {location.locationName}
    </MenuItem>
  );
};
