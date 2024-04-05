'use client'
import React, { useState, useEffect } from 'react'

import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
  geocodeByAddress,
  getLatLng,
} from 'react-google-places-autocomplete'
const SearchPlace = ({ onChange }) => {
  const [address, setAddress] = useState()

  return (
    <div
      style={{
        zIndex: 99999,
        position: 'relative',
        width: '20vw',
        top: '23em',
      }}
    >
      <GooglePlacesAutocomplete
        apiKey="AIzaSyD6YJW-62kt1AdPLgOoKikId5gkBqGQ2wI"
        // apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        selectProps={{
          placeholder: 'search address',
          isClearable: true,
          value: address,
          onMenuClose: (e) => {},
          onMouseUp: (e) => {},
          onChange: (val) => {
            console.log({ val })

            geocodeByPlaceId(val?.value?.place_id)
              .then((results) => getLatLng(results[0]))
              .then(({ lat, lng }) => onChange({ lat, lng }))
            // setPlaceId(val.value.place_id)
            setAddress(val)
            // debugger;
          },
          onClick: (val) => {
            setAddress(val)
          },
          onMouseover: (val) => {
            setAddress(val)
          },
        }}
      />
    </div>
  )
}

export default SearchPlace
