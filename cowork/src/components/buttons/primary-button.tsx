import { Button } from "@mui/material";

export const PrimaryButton = ({ onClick, label, Icon = undefined }) => (
  <Button startIcon={Icon ? <Icon /> : undefined} onClick={onClick}>
    {label}
  </Button>
);
