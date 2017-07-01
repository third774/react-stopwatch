export function reducer(state, action) {
  switch (action.type) {
    case 'START_TIMER':
      return {
        ...state,
        started: new Date().getTime()
      };
    case 'STOP_TIMER':
      const stopTime = new Date().getTime();
      const recordedTime = state.recordedTime || 0;
      return {
        ...state,
        recordedTime: recordedTime + stopTime - state.started,
        started: null
      };
    case 'RESET_TIMER':
      return {
        started: null,
        recordedTime: null,
        laps: []
      }
    default:
      return state;
  }
}
