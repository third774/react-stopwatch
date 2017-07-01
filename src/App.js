import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.scss';
import { StopwatchControls } from './components/StopwatchControls';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Stopwatch</h1>
        <StopwatchControls />
      </div>
    );
  }
}

export default App;
