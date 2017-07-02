import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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

Lap.propTypes = {
  label: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};

export default connect(state => state)(Lap);
