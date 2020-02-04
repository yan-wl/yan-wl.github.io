import React from 'react';
import './App.css';
import Weather from './components/Weather'
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <div>
      <CssBaseline />
      <Weather />
    </div>
  );
}

export default App;
