export function startTimer() {
  return {
    type: 'START_TIMER'
  };
}

export function stopTimer() {
  return {
    type: 'STOP_TIMER'
  };
}

export function updateTime(time) {
  return {
    type: 'UPDATE_TIME',
    time
  };
}

export function resetTime() {
  return {
    type: 'RESET_TIME'
  };
}

export function addLap(time) {
  return {
    type: 'ADD_LAP',
    time
  };
}

export function resetLaps() {
  return {
    type: 'RESET_LAPS'
  };
}
