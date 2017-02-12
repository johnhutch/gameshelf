import React from 'react';
import axios from 'axios';
import CollectionForm from './CollectionForm.jsx';
import Game from './Game.jsx';

/*
 * Closest we get to a "global" state set for our app, as this is the top level "root" component.
 * http://andrewhfarmer.com/react-ajax-best-practices/
 */
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { games: [] };
  }

  componentDidMount() {
    this.serverRequest =
      axios
      .get('https://bgg-json.azurewebsites.net/collection/arbitrarynoun')
      .then((response) => {
        this.setState({ games: response.data });
      })
      .catch(error => console.log(error));
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  /*
   * Render subcomponents for <main> html element
   */
  render() {
    const games = this.state.games;
    console.log(games);
    return (
      <main className="row">
        <aside className="col-xs-4">
          <CollectionForm buttonText="Get Collection" />
        </aside>
        <article id="Game" className="col-xs-8">
          {games.map(game =>
            <Game name={game.name} />
          )}
        </article>
      </main>
    );
  }
}

export default Main;
