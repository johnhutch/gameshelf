import React from 'react';
import ReactDOM from 'react-dom';
import CollectionForm from './components/collection_form.jsx';
import Game from './components/game.jsx';

/*
 * Render the previously defined Form component and insert into the .article--main element.
 * The property buttonText is optional according to the Form component definition.
 */
ReactDOM.render(
  <CollectionForm buttonText="Get Collection" />,
  document.getElementsByClassName('article--main')[0],
);

ReactDOM.render(
  <Game />,
  document.body.querySelector(".games"),
);
