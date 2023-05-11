import { MenuItem } from "./menu-item";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

export const Logout = () => {
  const navigate = useNavigate();
  // TODO remove token
  return (
    <>
      <MenuItem
        ItemIcon={LogoutIcon}
        title="Logout"
        onItemClick={() => navigate("login")}
      />
    </>
  );
};
