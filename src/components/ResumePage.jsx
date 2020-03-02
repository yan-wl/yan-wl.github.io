import React from 'react';
import '../css/ResumePage.css';
import Paragraph from './Paragraph';

export default function ResumePage() {
  return (
    <div
      className="resume-page"
    >
      <Paragraph
        title="Summary"
        paragraph="I am a self-directed and quick-learning Software Engineer with 1 year of experience in software development and knowledge in multiple programming languages."
        border
      />
      <Paragraph
        title="Education"
        paragraph="I am currently a year 2 student studying Computer Science at the National University of Singapore, expecting to graduate in May 2022."
        border
      />
      <Paragraph
        title="Employment History"
        paragraph="I am currently working as the Technical Lead at [Redacted], a startup I co-founded with friends. Some of the technologies used here include ReactJS, ExpressJS, PostgreSQL."
        border
      />
      <Paragraph
        title="Professional Skills"
        paragraph="JavaScript, Java, TypeScript, Git, SQL, PostgreSQL, Python, AWS, NodeJS, ReactJS."
      />
    </div>
  );
}
