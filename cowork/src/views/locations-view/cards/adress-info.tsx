import { useContext } from "react";
import { LocationsContext } from "../../../context/locations";

export const AdressInfo = () => {
  const { getCoworkData } = useContext(LocationsContext);
  const cowork = getCoworkData();
  return (
    <>
      {/* <h4>{cowork?.address?.city}</h4>
      <div>{cowork?.address?.street}</div>
      <div>
        {cowork?.address?.postalCode ? `${cowork?.address.postalCode}, ` : ""}
        {cowork?.address?.country}
      </div> */}
    </>
  );
};
