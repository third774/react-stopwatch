import React, { Component } from 'react';
import {connect} from 'react-redux';

export class StopwatchControls extends Component {
  render() {
    if (this.props.isStarted) {
      return (
        <div>
          <button className="button">Stop</button>
        </div>
      )
    } else {
      return (
        <div>
          <button className="button">Start</button>
        </div>
      )
    }
  }
}

export default connect(state => state)(StopwatchControls);
