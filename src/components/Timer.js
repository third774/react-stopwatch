import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Timer.scss';

export class Timer extends Component {
  render() {
    return (
      <h2 className="timer">{formatTime(this.props.time)}</h2>
    );
  }
}

export default connect(state => state)(Timer);

function formatTime(time) {
  let minutes = Math.floor(time / 60000);
  let seconds = Math.floor((time % 60000) / 1000);
  let milliSeconds = Math.round((time % 1000) * 0.1);
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  if (milliSeconds < 10) {
    milliSeconds = `0${milliSeconds}`;
  }
  return `${minutes}:${seconds}.${milliSeconds}`;
}
