import React, { Component } from 'react';
import { connect } from 'react-redux';
import StopwatchControls from './components/StopwatchControls';
import Timer from './components/Timer';
import LapList from './components/LapList';
import Lap from './components/Lap';

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

  componentDidMount() {
    this.tick();
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
        <Timer label={'Total'} time={this.totalTime}/>
        <StopwatchControls />
        <Lap label={`Lap #${this.props.laps.length + 1}`} time={this.lapTime}/>
        <LapList />
      </div>
    );
  }

}

export default connect(store => store)(App);
