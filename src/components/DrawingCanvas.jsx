import React from 'react';
import '../css/DrawingCanvas.css';
import Slider from './Slider';

export default function DrawingCanvas() {
  const [mouseWithin, setMouseWithin] = React.useState(false);
  const [drawing, setDrawing] = React.useState(false);
  const [height, setHeight] = React.useState(200);
  const [width, setWidth] = React.useState(200);
  const [maxHeight, setMaxHeight] = React.useState(200);
  const [maxWidth, setMaxWidth] = React.useState(300);
  const enclosingDivRef = React.createRef();
  const drawingCanvasRef = React.createRef();

  React.useEffect(() => {
    setMaxHeight(enclosingDivRef.current.clientHeight - 4);
    setMaxWidth(enclosingDivRef.current.clientWidth);
  }, [enclosingDivRef]);

  return (
    <div
      className="canvas-and-sliders"
    >
      <div
        className="enclosing-div"
        ref={enclosingDivRef}
      >
        <canvas
          ref={drawingCanvasRef}
          className="drawing-canvas"
          width={Math.min(width, maxWidth)}
          height={Math.min(height, maxHeight)}
          onMouseEnter={() => setMouseWithin(true)}
          onMouseLeave={() => setMouseWithin(false)}
          onMouseDown={() => setDrawing(true)}
          onMouseUp={() => setDrawing(false)}
          onMouseMove={(event) => {
            if (mouseWithin && drawing) {
              const drawingCanvas = drawingCanvasRef.current;
              const ctx = drawingCanvas.getContext('2d');
              const mouseX = event.clientX;
              const mouseY = event.clientY;
              const { offsetLeft } = drawingCanvas;
              const { offsetTop } = drawingCanvas;
              const drawX = mouseX - offsetLeft;
              const drawY = mouseY - offsetTop;
              ctx.fillStyle = 'white';
              ctx.fillRect(drawX, drawY, 2, 2);
            }
          }}
        />
      </div>
      <div
        className="slider-box"
      >
        <Slider
          label="height"
          initial={height}
          min={0}
          max={maxHeight}
          update={setHeight}
        />
        <Slider
          label="width"
          initial={width}
          min={0}
          max={maxWidth}
          update={setWidth}
        />
      </div>
    </div>
  );
}
