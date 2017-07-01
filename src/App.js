import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.scss';
import StopwatchControls from './components/StopwatchControls';
import Timer from './components/Timer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="app-title">React Stopwatch</h1>
        <Timer time={168196}/>
        <StopwatchControls />
      </div>
    );
  }
}

export default App;
