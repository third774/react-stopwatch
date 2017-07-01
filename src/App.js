import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './styles/App.scss';
import StopwatchControls from './components/StopwatchControls';
import Timer from './components/Timer';

class App extends Component {

  get totalTime() {
    if (this.props.started) {
      return Date.now() - this.props.started + this.props.recordedTime;
    } else {
      return this.props.recordedTime;
    }
  }

  get lapTime() {
    if (this.props.started) {
      return Date.now() - this.props.started + this.props.recordedTime - this.props.lapTotal;
    } else {
      return this.props.recordedTime - this.props.lapTotal;
    }
  }
  
  componentDidUpdate() {
    if (this.props.started) {
      this.animationFrame = requestAnimationFrame(this.tick.bind(this));
    } else {
      cancelAnimationFrame(this.animationFrame);
    }
  }

  tick() {
    this.forceUpdate();
  }

  render() {
    return (
      <div className="App">
        <h1 className="app__title">React Stopwatch</h1>
        <Timer time={this.totalTime}/>
        <Timer time={this.lapTime}/>
        <StopwatchControls />
        {this.renderLapTimes()}
      </div>
    );
  }

  renderLapTimes() {
    return this.props.laps.map((lap, i) => {
      return (
        <div key={i}>
          <label>Lap #{i + 1}</label>
          <Timer time={lap}/>
        </div>
      );
    })
  }
}

export default connect(store => store)(App);
