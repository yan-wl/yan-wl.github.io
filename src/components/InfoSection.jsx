import React from 'react';
import '../css/InfoSection.css';

export default function InfoSection() {
  return (
    <div className="intro-box">
      <img
        src="https://image.shutterstock.com/z/stock-vector-work-in-progress-sign-270781412.jpg"
        alt="profile-pic"
        className="profile-pic"
      />
      <p
        className="intro-para"
      >
        Hello, my name is [Redacted]. I am currently a year 2 student studying
        at the National University of Singapore.
      </p>
    </div>
  );
}
