import * as redux from 'redux';
import { isStarted, totalTime, laps } from '../reducers/reducers';

export function configureStore(initialState = {}) {
  var reducer = redux.combineReducers({
    isStarted, totalTime, laps
  });

  return redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
}
