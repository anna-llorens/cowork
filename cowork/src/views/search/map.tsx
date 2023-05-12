import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "./map.css";
import { Alert } from "@mui/material";

export const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  const center = useMemo(
    () => ({ lat: 41.395816727662634, lng: 2.161697430760768 }),
    []
  );

  return (
    <div>
      <Alert severity="warning">
        Google map preview. Available Locations will be pinned on the map. 🚧
        WIP 🚧
      </Alert>
      <div className="map">
        {!isLoaded ? (
          <div>Map preview</div>
        ) : (
          <GoogleMap
            mapContainerClassName="map-container"
            center={center}
            zoom={14}
          ></GoogleMap>
        )}
      </div>
    </div>
  );
};
