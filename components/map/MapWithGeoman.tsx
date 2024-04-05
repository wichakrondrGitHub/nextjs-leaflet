"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import Geoman from "./tools/Geoman";
import Control from "react-leaflet-custom-control";
import OpacityControl from "./tools/OpacityControl";

const MapWithGeoman = () => {
  const position = [14.177964728392135, 102.22987202566398, 14.177964728392135];
  const zoomLv = 13;

  return (
    <MapContainer
      style={{ height: "900px" }}
      center={position}
      zoom={zoomLv}
      scrollWheelZoom={true}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/dark_nolabels/{z}/{x}/{y}.png" />

      <Geoman />
      <Control position="topleft">
        <OpacityControl
          geojsonFeature={{
            type: "",
            features: [],
          }}
        />
      </Control>
    </MapContainer>
  );
};

export default MapWithGeoman;
