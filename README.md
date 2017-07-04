# React Stopwatch

Check out [the demo](https://third774.github.io/react-stopwatch/) on GitHub Pages

## Requirements

> Using HTML, CSS and JavaScript, create a functional and stylized Stopwatch application. The requirements are as follows:
> * Display two timers (starting from 00:00.00). One displays current lap time while the other displays total time.
> * The user can Start and Stop the time. When stopped, the timers should pause; when restarted, they should resume from where they left off.
> * The user can split the current time. When the user presses the Lap button, the current lap time is recorded and displayed in a list of laps and is then reset.
> * The user can Reset the time, resetting both timers to their initial value and clearing the list of recorded lap times.
> * If the browser window is closed while the timer is running, it should continue keeping track of time correctly when the app is reloaded. For example, if the timer is at 5 seconds when the window is closed and you let 20 seconds pass before you reopen the window, the timer should start running again from 25 seconds as soon as the app is reloaded.
> 
> Make sure your application has an appealing UI, is easy to use, is mobile- friendly, and supports the latest versions of Chrome and Firefox. Please build this application using React (feel free to use Redux if you find it would be useful). Our stack also includes Sass, ES6+, and Webpack if you want to demonstrate experience with some of these technologies (though not required).
> 
> In reviewing, it’s important to us that your code is consistent and well- formatted and that you’ve kept a good commit history that demonstrates your progress. In addition, please provide a README that outlines the structure of your application, the reasoning behind your technical choices, and any trade-offs you made or changes you would have implemented if you had additional time.

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
>   * Lap (current lap)
>   * LapList
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

* The requirement to have the application continue tracking time regardless of whether the window is open or not drove how the store was designed. I did not want to dispatch an action to update the store incrementing the timer repeatedly, so the active timers had to be based on when the timer was `started` in epoch time, and derived as they were rendered based on the current time for each frame.

* Every time the timer stops, the `recordedTime` is updated to hold the total number of centiseconds that the timer ran in previous intervals between stoppages, and is later added when calculating the timer values.

* `lapTotal` is updated in the store every time a lap is logged so that this value does not need to be calculated by summing the `laps` array during every `requestAnimationFrame` call.

* `requestAnimationFrame` was used for performance allowing the browser to control the render rate.

* After getting the application to function correctly, having it persist across page loads while still running was relatively easy. I used a redux middleware called `redux-localstorage` that keeps the application store in sync with `localstorage`. Once the middleware was wired up, it just worked.

* I ran into a rounding error when using centisecond formatting from millisecond values. Sometimes when adding up all the lap times, the value would not be precisely equal to the total time. I corrected this issue by storing only centisecond values and updating my formatting function to assume centisecond values.

* Special attention was paid to which `props` were updating in different components and causing them to re-render. At one point, I thought it was a good idea to move the `Lap` component for the current lap into the `LapList` component, but this caused the recorded lap list to be re-rendered every frame, so I pulled it out. Now, the `LapList` only re-renders when a new lap is recorded, and the `StopwatchContorls` only re-renders when the time is started or stopped.

## Trade-offs & Improvements

The decision to not store the current time in the store meant that I needed to hold that state within the `App` component and pass it into the `Timer` and `LapList` components. I potentially could have dispatched actions to update the store with the current time on each frame, but that could have had an impact on performance at least with my dev tools. I think I've heard that Redux can be configured to only retain a certain amount of store history, and if I had to update the store with the current time every frame I would have needed to go tinker with that.

Additionally, I would have liked to play with React animations. One option might have been upon lapping to pause the current lap timer and use `transform: scale()` to make the completed lap grow bigger briefly before sliding the whole list down and then showing the reset current lap timer again.
