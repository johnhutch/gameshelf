import React from 'react';
import ReactDOM from 'react-dom';
import CollectionForm from './components/CollectionForm.jsx';
import Game from './components/Game.jsx';

/*
 * Render the previously defined Form component and insert into the .article--main element.
 * The property buttonText is optional according to the Form component definition.
 */
ReactDOM.render(
  <CollectionForm buttonText="Get Collection" />,
  document.querySelector('aside#tools'),
);

ReactDOM.render(
  <Game />,
  document.body.querySelector('.games'),
);
