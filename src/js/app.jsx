import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.jsx';
import gameshelf from './reducers';

/*
 * Now that the reducers have been created and combined into
 * one, use that final reducer to create your global store.
 * Redux's data flow works like so:
 * 1. Dispatch a particular action.
 * 2. Redux store calls the appropriate reducer function, based on the action.
 * 3. The root reducer may combine results from the smaller ones.
 * 4. Redux store saves the returned, updated state.
 */
const store = createStore(gameshelf);

/*
 * Render the Main component which contains the bulk of the app's other components too.
 * Wrapping the Provider component around our Main component allows Main to have access
 * to the store.
 */
ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.querySelector('.container--main'),
);
