'use client'

import React, { useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer, GeoJSON, FeatureGroup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { latlng } from '@/interfaces/map.interface'
import Choropleth from 'react-leaflet-choropleth'

// const data = require('./data/json')
type MapChoroplethProps = {
  url: string
  center: latlng
}
//a MapChoropleth map with fetch geojson from client
const MapChoropleth = (props: MapChoroplethProps) => {
  const [geoJSON, setGeoJSON] = useState(null)

  const { url, center } = props
  useEffect(() => {
    // Fetch the GeoJSON data
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setGeoJSON(data)
      } catch (error) {
        console.error('Error fetching GeoJSON data:', error)
      }
    }

    fetchData()
  }, [])
  const style = {
    fillColor: '#F28F3B',
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.5,
  }

  useEffect(() => {
    console.log({ geoJSON })
  }, [geoJSON])

  return (
    <>
      {/* <div style={{ position: 'relative', width: '100%', height: '100vh' }}> */}
      <MapContainer
        // style={{
        //   position: 'absolute',
        //   width: '100%',
        //   height: '100%',
        //   zIndex: -1,
        //   top: 0,
        // }}
        className="h-96"
        center={center}
        // maxBoundsViscosity={1.0}
        zoom={4}

        // scrollWheelZoom={false}

        // boxZoom={false}
        // keyboard={false}
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/dark_nolabels/{z}/{x}/{y}.png" />
        {geoJSON && (
          <GeoJSON
            data={geoJSON}
            ref={geoJSON}
            pathOptions={{
              color: 'white',
              fillColor: '#F28F3B',
              fillOpacity: 0.7,
              opacity: 1,
              weight: 1,
            }}
            onEachFeature={(feature, layer) => {
              layer.bindPopup(
                "<img src='https://www.w3schools.com/images/lamp.jpg" +
                  "' width='259'/><br><b>Name: </b>" +
                  feature.properties.name +
                  '<br><b>Description: </b>' +
                  feature.properties.description
              )
              layer.on({
                mouseover: function (e) {
                  const auxLayer = e.target
                  auxLayer.setStyle({
                    weight: 4,
                  })
                },
                mouseout: function (e) {
                  const auxLayer = e.target
                  auxLayer.setStyle({
                    weight: 1,

                    dashArray: '',
                    fillOpacity: 0.7,
                    opacity: 1,
                  })
                  // layer
                  //   .bindPopup(
                  //     "<img src='https://www.w3schools.com/images/lamp.jpg" +
                  //       "' width='259'/><br><b>Name: </b>" +
                  //       feature.properties.name +
                  //       '<br><b>Description: </b>' +
                  //       feature.properties.description
                  //   )
                  //   .openPopup()
                },
              })
            }}
            attribution="&copy; credits due..."
          />
        )}

        {/* <Choropleth
            data={{ type: 'FeatureCollection', features: geoJSON }}
            scale={['#b3cde0', '#011f4b']}
            steps={7}
            mode="e"
          /> */}
      </MapContainer>
      {/* </div> */}
    </>
  )
}

export default MapChoropleth
