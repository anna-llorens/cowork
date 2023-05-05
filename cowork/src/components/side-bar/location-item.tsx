import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import { MenuItem, SubMenu } from "react-pro-sidebar";
export const LocationItem = () => {
  return (
    <SubMenu icon={<HomeOutlinedIcon />} label="Manage locations">
      <MenuItem icon={<PeopleOutlinedIcon />}>{"aaa"}</MenuItem>;
    </SubMenu>
  );
};
