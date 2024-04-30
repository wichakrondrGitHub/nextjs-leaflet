import React, { useState } from "react";
import {
  TileLayer,
  Marker,
  Popup,
  FeatureGroup,
  Circle,
  Polyline,
  Polygon,
} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";

const DrawTools = () => {
  const _onEdited = (e) => {
    let numEdited = 0;
    e.layers.eachLayer((layer) => {
      numEdited += 1;
      const geoJSON = layer.toGeoJSON();
      console.log(geoJSON);
    });
    console.log(`_onEdited: edited ${numEdited} layers`, e);

    // this._onChange();
  };

  const _onCreated = (e) => {
    let type = e.layerType;
    let layer = e.layer;
    if (type === "marker") {
      // Do marker specific actions
      console.log("_onCreated: marker created", e);
    } else {
      console.log("_onCreated: something else created:", type, e);
    }

    console.log("Geojson", layer.toGeoJSON());
    // Do whatever else you need to. (save to db; etc)

    // this._onChange();
  };

  const _onDeleted = (e) => {
    let numDeleted = 0;
    e.layers.eachLayer((layer) => {
      numDeleted += 1;
    });
    console.log(`onDeleted: removed ${numDeleted} layers`, e);

    // this._onChange();
  };

  const _onMounted = (drawControl) => {
    console.log("_onMounted", drawControl);
  };

  const _onEditStart = (e) => {
    console.log("_onEditStart", e);
  };

  const _onEditStop = (e) => {
    console.log("_onEditStop", e);
  };

  const _onDeleteStart = (e) => {
    console.log("_onDeleteStart", e);
  };

  const _onDeleteStop = (e) => {
    console.log("_onDeleteStop", e);
  };

  const _onDrawStart = (e) => {
    console.log("_onDrawStart", e);
  };
  const polyline = [
    [51.505, -0.09],
    [51.51, -0.1],
    [22.2974883, 73.2067383],
  ];
  const multiPolygon = [
    [
      [
        [2.0, 102.0],
        [2.0, 103.0],
        [3.0, 103.0],
        [3.0, 102.0],
        [2.0, 102.0],
      ],
    ],
    [
      [
        [0.0, 100.0],
        [0.0, 101.0],
        [1.0, 101.0],
        [1.0, 100.0],
        [0.0, 100.0],
      ],
      [
        [0.2, 100.2],
        [0.2, 100.8],
        [0.8, 100.8],
        [0.8, 100.2],
        [0.2, 100.2],
      ],
    ],
  ];
  /*onEdited	function	hook to leaflet-draw's draw:edited event
onCreated	function	hook to leaflet-draw's draw:created event
onDeleted	function	hook to leaflet-draw's draw:deleted event
onMounted	function	hook to leaflet-draw's draw:mounted event
onEditStart	function	hook to leaflet-draw's draw:editstart event
onEditStop	function	hook to leaflet-draw's draw:editstop event
onDeleteStart	function	hook to leaflet-draw's draw:deletestart event
onDeleteStop	function	hook to leaflet-draw's draw:deletestop event
onDrawStart	function	hook to leaflet-draw's draw:drawstart event
onDrawStop	function	hook to leaflet-draw's draw:drawstop event
onDrawVertex	function	hook to leaflet-draw's draw:drawvertex event
onEditMove	function	hook to leaflet-draw's draw:editmove event
onEditResize	function	hook to leaflet-draw's draw:editresize event
onEditVertex	function	hook to leaflet-draw's draw:editvertex event*/
  return (
    <FeatureGroup>
      <EditControl
        onDrawStart={_onDrawStart}
        position="topright"
        onEdited={_onEdited}
        onCreated={_onCreated}
        onDeleted={_onDeleted}
        draw={{
          polyline: {
            icon: new L.DivIcon({
              iconSize: new L.Point(8, 8),
            }),
            shapeOptions: {
              guidelineDistance: 10,
              color: "navy",
              weight: 3,
            },
          },
          marker: {
            icon: new L.Icon({
              iconUrl:
                "http://leafletjs.com/examples/custom-icons/leaf-green.png",
              iconSize: [32, 45],
            }),
          },
          rectangle: false,
          circlemarker: false,
          circle: false,
          polygon: true,
        }}
      />
      <Polyline positions={polyline} />
      <Polygon positions={multiPolygon} />
    </FeatureGroup>
  );
};

export default DrawTools;
