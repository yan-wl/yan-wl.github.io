import React from 'react';
import PropTypes from 'prop-types';

export default function HighlightableText(props) {
  const {
    children, start, end, color,
  } = props;
  const left = children.substring(0, start);
  const highlighted = children.substring(start, end + 1);
  const right = children.substring(end + 1);

  return (
    <div>
      <span>
        {left}
      </span>
      <span
        style={{
          color,
        }}
      >
        {highlighted}
      </span>
      <span>
        {right}
      </span>
    </div>
  );
}

HighlightableText.propTypes = {
  children: PropTypes.string.isRequired,
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};
