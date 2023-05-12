import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

import styled from "styled-components";

const MapContainer = styled.div`
  height: 50vw;
  width: 50vw;
`;

const StyledGoogleMaps = styled(GoogleMap)`
  height: 100%;
  width: 100%;
`;

export const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  return (
    <MapContainer>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap center={center} zoom={10} />
      )}
    </MapContainer>
  );
};
