import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import InfoPage from './components/InfoPage';
import Playground from './components/Playground';

const MOOD = {
  SERIOUS: 0,
  FUN: 1,
};
Object.freeze(MOOD);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mood: MOOD.SERIOUS,
    };
  }

  toggleMood() {
    const { mood } = this.state;
    if (mood === MOOD.SERIOUS) {
      this.setState({
        mood: MOOD.FUN,
      });
    } else {
      this.setState({
        mood: MOOD.SERIOUS,
      });
    }
  }

  render() {
    const { mood } = this.state;
    const content = mood === MOOD.SERIOUS ? <InfoPage /> : <Playground />;
    const label = mood === MOOD.SERIOUS ? 'Playground' : 'About';

    return (
      <div className="layout">
        <div className="header">
          <Header onClick={() => this.toggleMood()} label={label} />
        </div>
        <div className="content">
          <Content content={content} />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}
