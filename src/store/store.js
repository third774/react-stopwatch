import * as redux from 'redux';
import { reducer } from '../reducers/reducers';
import { initialState } from './initial-state';
import persistState from 'redux-localstorage'

export function configureStore(state = initialState) {
  return redux.createStore(reducer, state, redux.compose(
    persistState(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
}
