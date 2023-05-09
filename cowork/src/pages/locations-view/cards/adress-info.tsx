import { Typography } from "@mui/material";
import { useContext } from "react";
import { LocationsContext } from "../../../context/locations";

export const AdressInfo = () => {
  const { getCoworkData } = useContext(LocationsContext);
  const cowork = getCoworkData();
  return (
    <>
      <Typography variant="h5">{cowork?.address?.city}</Typography>
      <Typography>{cowork?.address?.street}</Typography>
      <Typography>
        {cowork?.address?.postalCode ? `${cowork?.address.postalCode}, ` : ""}
        {cowork?.address?.country}
      </Typography>
    </>
  );
};
