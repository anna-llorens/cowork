import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "./map.css";

export const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  const center = useMemo(
    () => ({ lat: 41.395816727662634, lng: 2.161697430760768 }),
    []
  );

  return (
    <div className="map">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={14}
        ></GoogleMap>
      )}
    </div>
  );
};
