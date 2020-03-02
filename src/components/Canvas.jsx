import React from 'react';
import PropTypes from 'prop-types';
import '../css/Canvas.css';
import ResumePage from './ResumePage';

export default function Canvas(props) {
  const { generator } = props;
  const component = generator();

  return (
    <div
      className="canvas"
    >
      { component || <ResumePage /> }
    </div>
  );
}

Canvas.propTypes = {
  generator: PropTypes.func.isRequired,
};
