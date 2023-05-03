import { Typography } from "@mui/material";
import { Separator } from "./Modal";

export const ModalHeader = () => {
  return (
    <Separator>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Register your coworking space.
      </Typography>
    </Separator>
  );
};
