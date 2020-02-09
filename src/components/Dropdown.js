import React from 'react';
import '../css/Dropdown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

export default function Dropdown(props) {
  const { value } = props;
  const [collapsed, setCollapsed] = React.useState(true);

  return (
    <React.Fragment>
      <button
        className={collapsed ? "collapsed-button" : "uncollapsed-button"}
        onClick={() => setCollapsed(!collapsed)}
      >
        <span className="button-value">
          {value}
        </span>
        <FontAwesomeIcon 
          icon={collapsed ? faAngleDown : faAngleUp}
        />
      </button>
      {collapsed ? null : props.children}
    </React.Fragment>
  );
}
