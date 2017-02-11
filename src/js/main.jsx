import React from 'react';
import ReactDOM from 'react-dom';
import Form from './form.jsx';

const username = 'facecheekwall';
const url = `https://bgg-json.azurewebsites.net/collection/${username}?grouped=true`;

console.log(url);

ReactDOM.render(
    <Form buttonText="Get Collection" />,
    document.getElementsByClassName('article--main')[0]
);
