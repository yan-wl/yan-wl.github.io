import React from 'react';
import PropTypes from 'prop-types';
import '../css/Paragraph.css';

export default function Paragraph(props) {
  const { border, title, paragraph } = props;

  return (
    <div
      className={border ? 'outer-box-with-border' : 'outer-box-without-border'}
    >
      <div
        className="title-box"
      >
        <h1
          className="title-text"
        >
          {title}
        </h1>
      </div>
      <div
        className="paragraph-box"
      >
        <p
          className="paragraph-text"
        >
          {paragraph}
        </p>
      </div>
    </div>
  );
}

Paragraph.propTypes = {
  border: PropTypes.bool,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};

Paragraph.defaultProps = {
  border: false,
};
