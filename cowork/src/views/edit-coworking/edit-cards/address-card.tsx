import { Button } from "@mui/material";
import { Card } from "../../../components/card";
import { AdressInfo } from "./adress-info";

export const AddressCard = () => {
  return (
    <Card
      title="Adress"
      cardContent={<AdressInfo />}
      cardActions={
        <Button size="small" onClick={() => alert("🚧 Work in progress 🚧")}>
          Edit
        </Button>
      }
    />
  );
};
