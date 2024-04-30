import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useMap, useMapEvents } from "react-leaflet";
import { Card, Row, Tooltip } from "antd";
import RangeSlider from "@/components/input/RangeSlider";
import "leaflet-editable";
interface Feature {
  type: string;
  properties: {
    id: string;
  };
  geometry: {
    type: string;
    coordinates: number[][];
  };
}

interface OpacityControlProps {
  geojsonFeature: {
    type: string;
    features: Feature[];
  };
}

const TestEditable: React.FC<OpacityControlProps> = ({
  geojsonFeature = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: { id: "1" },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [41.572266, 25.475203],
              [43.17627, 22.62637],
              [49.87793, 22.443716],
              [49.921875, 23.314198],
              [47.614746, 25.752589],
              [41.572266, 25.475203],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: { id: "2" },
        geometry: {
          coordinates: [
            [
              [50.11724544350568, 21.677502861311993],
              [43.689570045362956, 20.627372666445993],
              [44.53408214147012, 18.883295469704592],
              [50.11724544350568, 18.48329174173149],
              [50.11724544350568, 21.677502861311993],
            ],
          ],
          type: "Polygon",
        },
      },
    ],
  },
}) => {
  const map = useMap();
  // const map = L.map('map', { editable: true })

  const [sliderValue, setSliderValue] = useState<number>(0);
  const [showCard, setShowCard] = useState<boolean>(false);
  const [clickedFeatureId, setClickedFeatureId] = useState<string | null>(null);
  const { component, value } = RangeSlider();

  // Event handler for handling feature clicks on the map
  const handleFeatureClick = (event: L.LeafletEvent): void => {
    const layer = event.target;

    // Focus on the clicked feature
    if (map && layer instanceof L.Layer) {
      const feature = layer.feature as Feature;
      map.fitBounds(layer.getBounds());
      setClickedFeatureId(feature.properties.id);
    }
  };

  // Attach click event listener to the map
  useMapEvents({
    click: handleFeatureClick,
  });

  useEffect(() => {
    const opacityValue = value / 100;

    if (map) {
      //test editable
      const polyline = L.polyline([
        [43.1, 1.2],
        [43.2, 1.3],
        [43.3, 1.2],
      ]).addTo(map);
      polyline.enableEdit();
      // Remove existing GeoJSON layer
      map.eachLayer((layer) => {
        if (layer instanceof L.GeoJSON) {
          map.removeLayer(layer);
        }
      });

      // Add new GeoJSON layer with updated opacity and click event listener
      const geoJSONLayer = L.geoJSON(geojsonFeature, {
        style: (feature) => {
          // Apply different opacity to the clicked feature
          return {
            fillOpacity:
              clickedFeatureId === feature.properties.id ? opacityValue : 0.5,
          };
        },
        onEachFeature: (feature, layer) => {
          layer.on("click", handleFeatureClick);
        },
      }).addTo(map);
    }
  }, [geojsonFeature, map, value, clickedFeatureId]);

  // useEffect(() => {
  //   const opacityValue = value / 100

  //   if (map) {
  //     // Iterate over all layers on the map
  //     map.eachLayer((layer) => {
  //       // Check if the layer supports setStyle method (e.g., GeoJSON layer)
  //       if (layer.setStyle) {
  //         // Update the style of each layer
  //         layer.setStyle({ opacity: opacityValue })

  //         // Add click event listener to each layer
  //         layer.on('click', handleFeatureClick)
  //       }
  //     })
  //   }
  // }, [map, value])
  const customControlLayersStyle: React.CSSProperties = {
    backgroundColor: "#fff",
    zIndex: 405,
    width: "34px",
    height: "34px",
    lineHeight: "34x",
    top: "26.6rem",
    borderRadius: "4px",
  };

  const handleOpenCard = (): void => {
    setShowCard(!showCard);
  };

  return (
    <div>
      <div
        className="leaflet-bar flex items-center justify-center "
        style={customControlLayersStyle}
      >
        <Tooltip
          onClick={handleOpenCard}
          placement="leftTop"
          title="Transparent"
        >
          <span className="material-icons">opacity</span>
        </Tooltip>
      </div>
      {showCard && (
        <Card
          title={
            <Row align={"middle"} justify={"space-between"}>
              <h1> </h1>

              <h1>Transparency </h1>
              <MdClose onClick={() => handleOpenCard()} />
            </Row>
          }
        >
          {component}
        </Card>
      )}
    </div>
  );
};

export default TestEditable;
