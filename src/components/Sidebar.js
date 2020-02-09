import React from 'react';
import '../css/Sidebar.css';
import Dropdown from './Dropdown';
import InfoSection from './InfoSection';
import PointRightButton from './PointRightButton';
import DrawingCanvas from './DrawingCanvas';
import ResumePage from './ResumePage';

export default function Sidebar(props) {
  const { display } = props;

  return (
    <div className="sidebar">
      <InfoSection />
      <div
        className="vertical-button-area"
      >
        <PointRightButton
          value="Blackboard"
          onClick={() => display(<DrawingCanvas />)}
        />
        <PointRightButton
          value="Resume"
          onClick={() => display(<ResumePage />)}
        />
        <Dropdown
          value="Projects"
        >
          <PointRightButton
            value="Work in progress"
            onClick={() => display(<React.Fragment />)}
          />
        </Dropdown>
      </div>
    </div>
  )
}