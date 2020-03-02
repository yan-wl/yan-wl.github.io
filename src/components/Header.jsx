import React from 'react';
import PropTypes from 'prop-types';
import '../css/Header.css';

export default function Header(props) {
  const { onClick, label } = props;

  return (
    <div className="header-box">
      <span
        style={{
          marginLeft: '16px',
          maxWidth: '64px',
          fontSize: '11px',
        }}
      >
        I regret making this without a CSS library 😢
      </span>
      <button
        className="toggle-button"
        type="button"
        onClick={onClick}
      >
        {label}
        {' >'}
      </button>
    </div>
  );
}

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
