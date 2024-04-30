"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import Control from "react-leaflet-custom-control";

import DrawTools from "./tools/DrawTools";
import { Tooltip } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import MenuLayer from "../menu/MapMenu";
import SearchPlace from "./tools/Search";
import { latlng } from "@/interfaces/map.interface";
import MapRecenter from "./util/MapRecenter";
import RangeSlider from "../input/RangeSlider";
import OpacityControl from "./tools/OpacityControl";
import TestEditable from "./tools/TestEditable";

const MapDrawing = () => {
  const [center, setCenter] = useState<latlng>([
    23.057428249787307, 44.99542713212659,
  ]);
  const MapInstance = () => {
    const map = useMap();

    useEffect(() => {
      // Create and add a zoom control to the map
      const zoomControl = L.control.zoom({ position: "topright" });
      zoomControl.addTo(map);

      return () => {
        // Remove the zoom control when component unmounts
        map.removeControl(zoomControl);
      };
    }, [map]);

    return null;
  };

  return (
    <>
      {/* <SearchPlace onChange={({ lat, lng }) => setCenter([lat, lng])} /> */}

      <MapContainer
        style={{ height: "900px" }}
        center={center}
        zoom={7}
        zoomControl={false}
      >
        <MapRecenter location={center} zoomLevel={7} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapInstance />

        <DrawTools />
        <Control position="topleft">
          <ButtonGroup>
            <Tooltip placement="left">
              <MenuLayer />
            </Tooltip>

            {/* <Legend /> */}
          </ButtonGroup>
        </Control>
        <Control position="topleft">{/* <OpacityControl /> */}</Control>
      </MapContainer>
    </>
  );
};

export default MapDrawing;
