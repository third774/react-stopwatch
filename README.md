# React Stopwatch

Check out [the demo](https://third774.github.io/react-stopwatch/) on GitHub Pages

## Structure

### Files

Within the `src` folder files are organized within folders matching the type of files contained within.

> * actions
>   * actions.js
> * components
>   * App.js
>   * Lap.js
>   * LapList.js
>   * StopwatchControl.js
>   * Timer.js
> * helpers
>   * helpers.js
> * reducers
>   * reducers.js
> * store
>   * initial-state.js
>   * store.js
> * styles
>   * _variables.scss
>   * App.scss
>   * buttons.scss
>   * global.scss
>   * index.scss
>   * Lap.scss
>   * StopwatchControls.scss
>   * Timer.scss
> * index.js
> * registerServiceWorker.js

### Application Components

The `App` component is the top level component which manages the `requestAnimationFrame` ticking for the `Timer` and `Lap` components (for the active lap).

> * App
>   * Timer
>   * StopwatchControls
>   * LapList
>     * Lap (current lap)
>     * Lap (for each recorded lap)

### State

```js
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
```

## Reasoning

The requirement to have the application continue tracking time regardless of whether the window is open or not drove how the store was designed. I did not want to dispatch an action to update the store incrementing the timer repeatedly, so the active timers had to be based on when the timer was `started` in epoch time, and derived as they were rendered based on the current time for each frame.

Every time the timer stops, the `recordedTime` is updated to hold the total number of centiseconds that the timer ran in previous intervals between stoppages, and is later added when calculating the timer values.

`lapTotal` is updated in the store every time a lap is logged so that this value does not need to be calculated by summing the `laps` array during every `requestAnimationFrame` call.

`requestAnimationFrame` was used for performance allowing the browser to control the render rate.

After getting the application to function correctly, having it persist across page loads while still running was relatively easy. I used a redux middleware called `redux-localstorage` that keeps the application store in sync with `localstorage`. Once the middleware was wired up, it just worked.

Finally, I ran into a rounding error when using centisecond formatting from millisecond values. Sometimes when adding up all the lap times, the value would not be precisely equal to the total time. I corrected this issue by storing only centisecond values and updating my formatting function to assume centisecond values.

## Trade-offs & Improvements

The decision to not store the current time in the store meant that I needed to hold that state within the `App` component and pass it into the `Timer` and `LapList` components. I potentially could have dispatched actions to update the store with the current time on each frame, but that could have had an impact on performance at least with my dev tools. I think I've heard that Redux can be configured to only retain a certain amount of store history, and if I had to update the store with the current time every frame I would have needed to go tinker with that.

Additionally, I would have liked to play with React animations. One option might have been upon lapping to pause the current lap timer and use `transform: scale()` to make the completed lap grow bigger briefly before sliding the whole list down and then showing the reset current lap timer again.
