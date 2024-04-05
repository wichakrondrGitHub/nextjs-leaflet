"use client";

import React from "react";
import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
  FeatureGroup,
  Circle,
  LayersControl,
  LayerGroup,
  Rectangle,
} from "react-leaflet";

const MapWrapper: React.FC = () => {
  const center: [number, number] = [51.505, -0.09];
  const rectangle: [[number, number], [number, number]] = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];

  return (
    <MapContainer className="h-96" center={center} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default MapWrapper;
