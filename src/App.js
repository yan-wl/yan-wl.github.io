import React from 'react';
import './App.css';
import Weather from './components/Weather'
import { CssBaseline } from '@material-ui/core';
import Game from './components/TicTacToe/Game';

function App() {
  return (
    <Game />
    // <div>
    //   <CssBaseline />
    //   <Weather />
    // </div>
  );
}

export default App;
