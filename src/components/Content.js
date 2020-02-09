import React from 'react';
import '../css/Content.css';
import Sidebar from './Sidebar';
import Canvas from './Canvas';

export default function Content() {
  const [canvasComponent, setCanvasComponent] = React.useState(undefined);

  return (
    <div className="content-box">
      <Sidebar 
        display={setCanvasComponent} 
      />
      <Canvas
        generator={() => canvasComponent}
      />
    </div>
  )
}
