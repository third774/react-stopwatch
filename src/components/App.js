import React, { Component } from 'react';
import { connect } from 'react-redux';
import StopwatchControls from './StopwatchControls';
import Timer from './Timer';
import LapList from './LapList';

class App extends Component {

  state = {
    totalTime: 0,
    currentLapTime: 0
  };

  componentDidMount() {
    this.tick();
  }

  componentDidUpdate() {
    requestAnimationFrame(this.tick.bind(this));
  }

  tick() {
    if (this.props.started) {
      const now = Date.now();
      this.setState({
        now,
        totalTime: now - this.props.started + this.props.recordedTime,
        currentLapTime: now - this.props.started + this.props.recordedTime - this.props.lapTotal
      });
    } else {
      if (this.props.recordedTime !== this.state.totalTime) {
        this.setState({
          totalTime: this.props.recordedTime,
          currentLapTime: this.props.recordedTime - this.props.lapTotal
        });
      }
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="app__title">React Stopwatch</h1>
        <Timer label={'Total'} time={this.state.totalTime} />
        <StopwatchControls />
        <LapList currentLapTime={this.state.currentLapTime} />
      </div>
    );
  }

}

export default connect(store => store)(App);
