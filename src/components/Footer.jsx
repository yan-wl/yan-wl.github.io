import React from 'react';
import '../css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <div className="footer-box">
      <div className="footer-item">
        <a
          href="https://www.linkedin.com/in/wei-liang-yan-ab0299185/"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            style={{
              color: 'white',
            }}
          />
        </a>
      </div>
      <div className="footer-item">
        <a
          href="https://www.github.com/uberSaiyan"
        >
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            style={{
              color: 'white',
            }}
          />
        </a>
      </div>
      <div className="footer-item">
        <a href="mailto:yanwl.note@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2x"
            style={{
              color: 'white',
            }}
          />
        </a>
      </div>
    </div>
  );
}
