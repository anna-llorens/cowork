import { Typography } from "@mui/material";
import { Separator } from "./modal";

export const ModalHeader = ({ title }) => {
  return (
    <Separator>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {title}
      </Typography>
    </Separator>
  );
};
