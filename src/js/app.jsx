import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';

/*
 * Closest we get to a "global" state set for our app, as this is the top level "root" component.
 * http://andrewhfarmer.com/react-ajax-best-practices/
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    return (
      <div className="App">
        <Header title="Gameshelf" />
        <Main />
      </div>
    );
  }
}

/*
 * Render the App component which contains the bulk of the app's other components too.
 */
ReactDOM.render(
  <App />,
  document.querySelector('div.container-fluid'),
);
