import { Button, Typography } from "@mui/material";
import { LocationsContext } from "../../../context/locations";
import { useContext } from "react";
import { Card } from "../../../components/card";

export const BuildingCard = () => {
  const { getCoworkData } = useContext(LocationsContext);
  const cowork = getCoworkData();
  return (
    <Card
      title={"Building"}
      cardContent={
        <>
          <h5>Web site</h5>
          {/* <Typography>{cowork?.web}</Typography> */}
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
