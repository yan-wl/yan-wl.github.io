import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="layout">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <Content />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
