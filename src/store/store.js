import * as redux from 'redux';
import { reducer } from '../reducers/reducers';
import { initialState } from './initial-state';

export function configureStore(state = initialState) {
  return redux.createStore(reducer, state, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
}
