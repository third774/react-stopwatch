export const initialState = {
  
  /**
   * Epoch timestamp of when the timer was started
   */
  started: null,

  /**
   * Total time recorded when stopping the timer in milliseconds
   */
  recordedTime: 0,

  /**
   * Sum of lap times in milliseconds
   * Setting this value on each lap so it doesn't need to be
   * calculated when rendering
   */
  lapTotal: 0,

  /**
   * Array of lap times in milliseconds
   */
  laps: []
};
