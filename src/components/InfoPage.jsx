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
      <h1 className="big-text">Yan Wei Liang</h1>
      <p className="info-text">Computer Science Undergraduate</p>
      <p className="info-text">Passionate about web development</p>
      <hr className="section-separator" />
      <h1 className="big-text">Projects</h1>
      <a href="https://github.com/SoilingRogue/Orbital2019">
        <h2>Basic Instinct | Orbital 2019 Project</h2>
      </a>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <iframe
          title="Basic Instinct"
          width="426"
          height="240"
          src="https://www.youtube.com/embed/lS5H-fB6O4o"
          style={{
            flexShrink: 0,
            marginBottom: '16px',
            marginLeft: '32px',
            marginRight: '32px',
          }}
        />
        <p
          style={{
            maxWidth: '400px',
            fontSize: '20px',
          }}
        >
          My friend and I made this game in year 1 of our undergraduate studies.
          We learnt the basics of Unity and developed it in 3 months.
          Eventually, we obtained the highest level of achievement - Apollo.
          I felt that the learning curve at the beginning of this project was
          incredibly steep, because I had no prior experience working with game engines
          and I was not familiar with C# as well.
        </p>
      </div>
    </>
  );
}
