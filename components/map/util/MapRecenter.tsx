import { latlng } from '@/interfaces/map.interface'
import React, { useEffect } from 'react'
import { useMap } from 'react-leaflet'

const MapRecenter = ({ location, zoomLevel }: { location: latlng; zoomLevel?: number }) => {
  const map = useMap()

  useEffect(() => {
    console.log({ location })

    // Fly to that coordinates and set new zoom level
    map.flyTo(location, zoomLevel, {
      animate: false,
      duration: 2.2,
    })
  }, [location])
  return null
}
export default MapRecenter
