import { RegisterCoworkModal } from "../../modals/resgister-cowork-modal";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { MenuItem } from "./menu-item";

export const AddLocation = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <>
      <MenuItem
        onItemClick={() => setOpen(true)}
        ItemIcon={AddIcon}
        title="Add Location"
      />
      <RegisterCoworkModal isOpen={open} handleClose={handleClose} />
    </>
  );
};
