export function formatTime(timeInCentiSeconds) {
  let minutes = Math.floor(timeInCentiSeconds / 6000);
  let seconds = Math.floor((timeInCentiSeconds % 6000) / 100);
  let centiSeconds = timeInCentiSeconds % 100;
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  if (centiSeconds < 10) {
    centiSeconds = `0${centiSeconds}`;
  }
  return `${minutes}:${seconds}.${centiSeconds}`;
}

export function convertToCentiSeconds(timeInMilliseconds) {
  return Math.round(timeInMilliseconds * 0.1);
}
