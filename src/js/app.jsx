import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.jsx';

/*
 * Render the previously defined Form component and insert into the .article--main element.
 * The property buttonText is optional according to the Form component definition.
 */

ReactDOM.render(
  <Main />,
  document.querySelector('main'),
);
