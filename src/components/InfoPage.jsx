import React from 'react';
import '../css/InfoPage.css';

export default function InfoPage() {
  return (
    <>
      <img
        className="profile-pic"
        src="https://image.shutterstock.com/z/stock-vector-work-in-progress-sign-270781412.jpg"
        alt="profile-pic"
      />
      <h1
        className="name-text"
      >
        Yan Wei Liang
      </h1>
      <p
        className="info-text"
      >
        Computer Science Undergraduate
      </p>
      <p
        className="info-text"
      >
        Passionate about web development
      </p>
    </>
  );
}
