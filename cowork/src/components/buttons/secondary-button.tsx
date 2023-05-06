import { Button } from "@mui/material";

export const SecondaryButton = ({ onClick, label, Icon = undefined }) => (
  <Button
    startIcon={Icon ? <Icon /> : undefined}
    variant="outlined"
    onClick={onClick}
  >
    {label}
  </Button>
);
