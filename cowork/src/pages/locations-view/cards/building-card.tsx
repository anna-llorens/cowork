import { Button, Typography } from "@mui/material";
import { Card } from "../../../components";
import { LocationsContext } from "../../../context/locations";
import { useContext } from "react";

export const BuildingCard = () => {
  const { getCoworkData } = useContext(LocationsContext);
  const cowork = getCoworkData();
  return (
    <Card
      title={"Building"}
      cardContent={
        <>
          <h5>Web site</h5>
          <Typography>{cowork?.web}</Typography>
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
