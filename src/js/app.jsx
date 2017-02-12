import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.jsx';

/*
 * Render the Main component which contains the bulk of the app's other components too.
 */
ReactDOM.render(
  <Main />,
  document.querySelector('.container--main'),
);
