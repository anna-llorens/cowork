import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { MenuItem } from "./menu-item";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <MenuItem
        ItemIcon={HomeOutlinedIcon}
        title="Home"
        onItemClick={() => navigate("home")}
      />
    </>
  );
};
