import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/form.jsx';

/*
 * Render the previously defined Form component and insert into the .article--main element.
 * The property buttonText is optional according to the Form component definition.
 */
ReactDOM.render(
  <Form buttonText="Get Collection" />,
  document.getElementsByClassName('article--main')[0],
);
