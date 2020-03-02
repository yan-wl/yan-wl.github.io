import React from 'react';
import PropTypes from 'prop-types';
import '../css/Content.css';

export default function Content(props) {
  const { content } = props;

  return (
    <div className="content-box">
      {content}
    </div>
  );
}

Content.propTypes = {
  content: PropTypes.node.isRequired,
};
