import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Timer.scss';
import { formatTime } from '../helpers/helpers';

export class Timer extends Component {
  render() {
    return (
      <h2 className="timer">{formatTime(this.props.time)}</h2>
    );
  }
}

export default connect(state => state)(Timer);
