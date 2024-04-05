// Import necessary libraries
import React, { useState } from 'react'
import styled from 'styled-components'

// Styled component for the input range
const StyledInputRange = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #4caf50;
    cursor: pointer;
    transition: background 0.2s;
  }

  &::-webkit-slider-thumb:hover {
    background: #45a049;
  }

  &::-webkit-slider-thumb::before {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    padding: 5px;
    background-color: #4caf50;
    color: #fff;
    border-radius: 5px;
    font-size: 12px;
    opacity: 0;
    transition: opacity 0.2s;
  }

  &:hover::-webkit-slider-thumb::before {
    opacity: 1;
  }
`

// React component
const RangeSlider = () => {
  const [value, setValue] = useState(50)

  const handleChange = (event) => {
    setValue(event.target.value)
  }
  const component = (
    <div>
      <StyledInputRange
        type="range"
        min="0"
        max="100"
        step="1"
        value={value}
        onChange={handleChange}
        data-tooltip={value}
      />
      <p>Value: {value}%</p>
    </div>
  )

  return { component, value }
}

export default RangeSlider
