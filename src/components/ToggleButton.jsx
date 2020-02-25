import React from 'react';
import '../css/ToggleButton.css';
import PropTypes from 'prop-types';

export default class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      positionIsLeft: true,
    };
  }

  render() {
    const { onClick, leftText, rightText } = this.props;
    const { positionIsLeft } = this.state;

    return (
      <button
        className="slider-button"
        type="button"
        onClick={() => {
          this.setState({ positionIsLeft: !positionIsLeft });
          onClick();
        }}
      >
        <span
          style={{
            width: '100%',
            textAlign: 'center',
            order: positionIsLeft ? 2 : 1,
            overflowX: 'hidden',
            maxWidth: '100px',
            fontSize: '12px',
          }}
        >
          {positionIsLeft ? leftText : rightText}
        </span>
        <svg
          height="16"
          width="16"
          style={{
            order: positionIsLeft ? 1 : 2,
          }}
        >
          <circle
            cx="8"
            cy="8"
            r="8"
            stroke="white"
            strokeWidth="1"
            fill="silver"
          />
        </svg>
      </button>
    );
  }
}

ToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  leftText: PropTypes.string.isRequired,
  rightText: PropTypes.string.isRequired,
};
