import React, { Component } from 'react';
import { connect } from 'react-redux';
import Lap from './Lap';

export class LapList extends Component {
  render() {
    const { laps } = this.props;
    return (
      <div className="lap-list">
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

export default connect(state => {return {laps: state.laps};})(LapList);
