import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { MenuItem } from "./menu-item";
import { useNavigate } from "react-router-dom";

export const MyProfileItem = () => {
  const navigate = useNavigate();
  // TODO remove token
  return (
    <>
      <MenuItem
        ItemIcon={AccountCircleIcon}
        title="My profile"
        onItemClick={() => navigate("my-profile")}
      />
    </>
  );
};
