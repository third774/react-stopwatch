import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startTimer, stopTimer, addLap, resetTimer } from '../actions/actions';
import FontAwesome from 'react-fontawesome';

export class StopwatchControls extends Component {
  render() {
    const { started, dispatch } = this.props;

    if (started) {
      return (
        <div className="stopwatch-controls">
          <button className="button button--red" onClick={() => dispatch(stopTimer(Date.now()))}>
            <FontAwesome className="fa-fw" name='square'/> Stop
          </button>
          <button className="button button--blue" onClick={() => dispatch(addLap(Date.now()))}>
            <FontAwesome className="fa-fw" name='refresh'/> Lap
          </button>
        </div>
      )
    } else {
      return (
        <div className="stopwatch-controls">
          <button className="button button--green" onClick={() => dispatch(startTimer(Date.now()))}>
            <FontAwesome className="fa-fw" name='play'/> Start
          </button>
          <button className="button button--red" onClick={() => dispatch(resetTimer())}>
            <FontAwesome className="fa-fw" name='trash'/> Reset
          </button>
        </div>
      )
    }
  }
}

export default connect(state => state)(StopwatchControls);
