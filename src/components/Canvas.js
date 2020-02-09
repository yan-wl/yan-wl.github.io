import React from 'react';
import '../css/Canvas.css';
import ResumePage from './ResumePage';

export default function Canvas(props) {
  const component = props.generator();
  
  return (
    <div
      className='canvas'
    >
      { component || <ResumePage /> }
    </div>
  );
}
