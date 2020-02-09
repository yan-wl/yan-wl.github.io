import React from 'react';
import '../css/Slider.css';

export default function Slider(props) {
  const { label, initial, min, max, update } = props;
  const [value, setValue] = React.useState(initial);

  return (
    <div
      className="slider-and-label"
    >
      <small
        className="slider-label"
      >{label}</small>
      <input 
        type="range" 
        min={min} 
        max={max}
        value={value} 
        className="slider" 
        onChange={(event) => {
          setValue(event.target.value)
          if (update) {
            update(event.target.value)
          }
        }}
      />
    </div>
  );
}