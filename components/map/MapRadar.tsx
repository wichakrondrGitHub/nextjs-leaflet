'use client'

import React from 'react'
import { MapContainer, TileLayer, ImageOverlay } from 'react-leaflet'

const MapRadar: React.FC = () => {
  const center: [number, number] = [40.7430785, -74.175995]
  const bounds = [
    [40.712216, -74.22655],
    [40.773941, -74.12544],
  ]
  return (
    <MapContainer className="h-96" center={center} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ImageOverlay
        url={'/assets/radar.svg'}
        // url="http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg"
        bounds={bounds}
        opacity={0.5}
        zIndex={10}
      />
    </MapContainer>
  )
}

export default MapRadar
