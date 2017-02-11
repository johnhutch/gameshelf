import React from 'react';
import ReactDOM from 'react-dom';
import Form from './form.jsx';

let username = 'facecheekwall';
const url = `https://bgg-json.azurewebsites.net/collection/${username}?grouped=true`;

console.log(url);

ReactDOM.render(
  <form>
    <label for="username">BGG Username</label>
    <input type="text" name="username">
    <input type="submit" value="Get Collection">
  </form>,
  document.getElementsByClassName('article--main')[0]
);
