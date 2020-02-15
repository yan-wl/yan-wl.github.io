import React from 'react';
import PropTypes from 'prop-types';
import '../css/PointRightButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function PointRightButton(props) {
  const { onClick, value } = props;

  return (
    <button
      type="button"
      className="point-right-button"
      onClick={onClick}
    >
      <span className="point-right-button-value">
        {value}
      </span>
      <FontAwesomeIcon
        icon={faAngleRight}
      />
    </button>
  );
}

PointRightButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
