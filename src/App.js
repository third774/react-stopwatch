import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { StopwatchControls } from './components/StopwatchControls';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StopwatchControls />
      </div>
    );
  }
}

export default App;
