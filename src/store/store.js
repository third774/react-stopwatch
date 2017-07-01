import * as redux from 'redux';
import { reducer } from '../reducers/reducers';

const initialState = {
  started: null,
  recordedTime: 0,
  laps: []
}

export function configureStore(state = initialState) {
  return redux.createStore(reducer, state, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
}
