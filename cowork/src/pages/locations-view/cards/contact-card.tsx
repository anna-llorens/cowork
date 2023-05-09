import { Button, Typography } from "@mui/material";
import { Card } from "../../../components";
import { useContext } from "react";
import { LocationsContext } from "../../../context/locations";

export const ContactCard = () => {
  const { getCoworkData } = useContext(LocationsContext);
  const cowork = getCoworkData();
  return (
    <Card
      title={"Contact details"}
      cardContent={
        <>
          <Typography variant="h5">Coworking admin</Typography>
          <Typography>
            {cowork?.contact?.name} {cowork?.contact?.surname}
          </Typography>
          <Typography variant="h5">Billing contact</Typography>
          <Typography>-</Typography>
          <Typography variant="h5">Marketing contact</Typography>
          <Typography>-</Typography>
        </>
      }
      cardActions={
        <Button size="small" onClick={() => alert("🚧 Work in progress 🚧")}>
          Edit
        </Button>
      }
    />
  );
};
