import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startTimer, stopTimer, addLap, resetTimer } from '../actions/actions';

export class StopwatchControls extends Component {
  render() {
    const { started, dispatch } = this.props;

    if (started) {
      return (
        <div>
          <button className="button" onClick={() => dispatch(stopTimer(Date.now()))}>Stop</button>
          <button className="button" onClick={() => dispatch(addLap(Date.now()))}>Lap</button>
        </div>
      )
    } else {
      return (
        <div>
          <button className="button" onClick={() => dispatch(startTimer(Date.now()))}>Start</button>
          <button className="button" onClick={() => dispatch(resetTimer())}>Reset</button>
        </div>
      )
    }
  }
}

export default connect(state => state)(StopwatchControls);
