import React from 'react';
import '../css/PointRightButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function PointRightButton(props) {
  return (
    <button
      className="point-right-button"
      onClick={props.onClick}
    >
      <span className="point-right-button-value">
        {props.value}
      </span>
      <FontAwesomeIcon 
        icon={faAngleRight}
      />
    </button>
  );
}
