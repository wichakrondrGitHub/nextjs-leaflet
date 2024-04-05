import { useEffect } from 'react'
import L from 'leaflet'
import { useMap } from 'react-leaflet'

function Legend() {
  const map = useMap()

  useEffect(() => {
    if (map) {
      const legend = L.control({ position: 'bottomright' })

      legend.onAdd = () => {
        const div = L.DomUtil.create('div', 'info legend')
        div.innerHTML =
          '<h4>This is the legend</h4>' + '<b>Lorem ipsum dolor sit amet consectetur adipiscing</b>'
        return div
      }

      legend.addTo(map)
    }
  }, [])
  return null
}

export default Legend
