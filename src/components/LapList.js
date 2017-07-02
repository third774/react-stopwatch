import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Lap from './Lap';

export class LapList extends Component {
  render() {
    const { laps } = this.props;
    return (
      <div className="lap-list">
        <Lap label={`Lap #${this.props.laps.length + 1}`} time={this.props.currentLapTime} />
        {laps.map((lap, i) => {
          const lapNumber = laps.length - i;
          return (
            <Lap key={lapNumber} label={`Lap #${lapNumber}`} time={lap} />
          );
        })}
      </div>
    );
  }
}

LapList.propTypes = {
  currentLapTime: PropTypes.number.isRequired
};

export default connect(state => state)(LapList);
