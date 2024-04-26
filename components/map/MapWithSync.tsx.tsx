"use client";
import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.sync";
import "leaflet-draw";
import { Button } from "antd";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px #ddd;
  background: #f0f0f0;
`;

const MapContainer = styled.div`
  height: 75vh;
  flex: 1;
`;

const Map2Container = styled.div`
  height: 75vh;
  flex: 1;
  margin-right: 10px;

  display: ${(props) => (props.show ? "grid" : "none")};
`;

const SyncedMaps = () => {
  const [showMap, setShowMap] = useState(true);

  const map1Ref = useRef(null);
  const map2Ref = useRef(null);

  useEffect(() => {
    // Initialize map instances
    const map1 = L.map(map1Ref.current).setView([51.505, -0.09], 13);
    const map2 = L.map(map2Ref.current).setView([51.505, -0.09], 13);

    // Add tiles to the maps
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(
      map1
    );
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(
      map2
    );

    // FeatureGroup is to store editable layers
    var drawnItems = new L.FeatureGroup();
    map1.addLayer(drawnItems);
    var drawControl = new L.Control.Draw({
      edit: {
        featureGroup: drawnItems,
      },
    });
    map1.addControl(drawControl);
    // Sync the maps
    map1.sync(map2);
    map2.sync(map1);

    return () => {
      // Cleanup when the component is unmounted
      map1.remove();
      map2.remove();
    };
  }, [showMap]);

  return (
    <>
      <Button
        onClick={() => setShowMap(!showMap)}
        style={{ flex: 0, marginRight: 10 }}
      >
        {showMap ? "Exit Split view" : "Split View"}
      </Button>

      <Container>
        <Map2Container ref={map2Ref} show={showMap} />
        <MapContainer ref={map1Ref} />
      </Container>
    </>
  );
};

export default SyncedMaps;
