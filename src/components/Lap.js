import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatTime } from '../helpers/helpers';

export class Lap extends Component {
  render() {
    return (
      <div className="lap">
        <label className="lap__label">{this.props.label}</label>
        <h3 className="lap__clock">{formatTime(this.props.time)}</h3>
      </div>
    );
  }
}

export default connect(state => state)(Lap);
