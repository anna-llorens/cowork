import { RegisterCoworkModal } from "../../modals/resgister-cowork-modal";
import { useState } from "react";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";

import { MenuItem } from "./menu-item";

export const AddLocation = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <>
      <MenuItem
        onItemClick={() => setOpen(true)}
        ItemIcon={AddLocationAltOutlinedIcon}
        title="Add Location"
      />
      <RegisterCoworkModal isOpen={open} handleClose={handleClose} />
    </>
  );
};
