import React from 'react';
import PropTypes from 'prop-types';
import '../css/Dropdown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

export default function Dropdown(props) {
  const { value, children } = props;
  const [collapsed, setCollapsed] = React.useState(true);

  return (
    <>
      <button
        type="button"
        className={collapsed ? 'collapsed-button' : 'uncollapsed-button'}
        onClick={() => setCollapsed(!collapsed)}
      >
        <span className="button-value">
          {value}
        </span>
        <FontAwesomeIcon
          icon={collapsed ? faAngleDown : faAngleUp}
        />
      </button>
      {collapsed ? null : children}
    </>
  );
}

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
};
