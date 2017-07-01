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
      return {
        started: null,
        recordedTime: 0,
        laps: []
      }
    default:
      return state;
  }
}
