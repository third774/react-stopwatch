export const initialState = {
  
  /**
   * Epoch timestamp of when the timer was started in centiseconds
   */
  started: null,

  /**
   * Total time recorded when stopping the timer in centiseconds
   */
  recordedTime: 0,

  /**
   * Sum of lap times in centiseconds
   * Setting this value on each lap so it doesn't need to be
   * calculated when rendering
   */
  lapTotal: 0,

  /**
   * Array of lap times in centiseconds. New laps are prepended, so the list is in reverse
   */
  laps: []
};
