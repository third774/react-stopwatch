import { initialState } from '../store/initial-state';

export function reducer(state, action) {
  switch (action.type) {
    case 'START_TIMER':
      return {
        ...state,
        started: action.time
      };
    case 'STOP_TIMER':
      return {
        ...state,
        recordedTime: state.recordedTime + action.time - state.started,
        started: null
      };
    case 'RESET_TIMER':
      return initialState;
    case 'ADD_LAP':
      const lapTotal = state.laps.reduce((prev, cur) => prev + cur, 0);
      const lapTime = action.time - state.started + state.recordedTime - lapTotal;
      const newLapTotal = lapTotal + lapTime;
      return {
        ...state,
        lapTotal: newLapTotal,
        laps: [lapTime, ...state.laps],
      }
    default:
      return state;
  }
}
