import { Button } from "@mui/material";
import { Separator } from "./modal";

export const ModalFooter = ({ handleClose, registerCompany }) => {
  return (
    <Separator>
      <Button variant="outlined" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="contained" onClick={registerCompany}>
        Send for approval
      </Button>
    </Separator>
  );
};
