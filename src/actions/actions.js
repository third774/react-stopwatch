export function startTimer(time) {
  return {
    type: 'START_TIMER',
    time
  };
}

export function stopTimer(time) {
  return {
    type: 'STOP_TIMER',
    time
  };
}

export function resetTimer() {
  return {
    type: 'RESET_TIMER'
  };
}

export function addLap(time) {
  return {
    type: 'ADD_LAP',
    time
  };
}
