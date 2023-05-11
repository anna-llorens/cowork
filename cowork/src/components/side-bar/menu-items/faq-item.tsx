import { MenuItem } from "./menu-item";
import { useNavigate } from "react-router-dom";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";

export const FaqItem = () => {
  const navigate = useNavigate();
  // TODO remove token
  return (
    <>
      <MenuItem
        ItemIcon={LiveHelpOutlinedIcon}
        title="FAQ"
        onItemClick={() => navigate("login")}
      />
    </>
  );
};
