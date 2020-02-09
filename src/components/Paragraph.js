import React from 'react';
import '../css/Paragraph.css';

export default function Paragraph(props) {
  return (
    <div
      className={props.border ? "outer-box-with-border" : "outer-box-without-border" }
    >
      <div
        className="title-box"
      >
        <h1
          className="title-text"
        >
          {props.title}
        </h1>
      </div>
      <div
        className="paragraph-box"
      >
        <p
          className="paragraph-text"
        >
          {props.paragraph}
        </p>
      </div>
    </div>
  );
}
