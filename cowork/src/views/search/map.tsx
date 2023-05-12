/* global google */
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";
import { useMemo, useState } from "react";
import "./map.css";
import React from "react";

export const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const center = useMemo(
    () => ({ lat: 41.395816727662634, lng: 2.161697430760768 }),
    []
  );

  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={15}
        >
          <Marker
            position={{ lat: 41.395816727662634, lng: 2.161697430760768 }}
          />
        </GoogleMap>
      )}
    </div>
  );
};
