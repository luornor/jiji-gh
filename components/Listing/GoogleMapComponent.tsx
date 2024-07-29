import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

interface MapProps {
  coordinates: { lat: number; lng: number } | null;
}

const GoogleMapComponent: React.FC<MapProps> = ({ coordinates }) => {
  const GOOGLE_MAP_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;
  const legonCoordinates = { lat: 5.6508, lng: -0.186964 };

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAP_API_KEY ?? ""}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "400px" }}
        center={coordinates || legonCoordinates}
        zoom={coordinates ? 15 : 10}
      >
        <Marker position={coordinates || legonCoordinates} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
