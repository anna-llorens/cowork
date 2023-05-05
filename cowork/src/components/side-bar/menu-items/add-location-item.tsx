import { Menu, MenuItem } from "react-pro-sidebar";
import { BasicModal } from "../../modal/modal";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

export const AddLocation = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Menu>
        <MenuItem icon={<AddIcon />} onClick={() => setOpen(true)}>
          Add location
        </MenuItem>
      </Menu>
      <BasicModal isOpen={open} handleClose={handleClose} />
    </>
  );
};
