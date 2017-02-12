import React from 'react';
import { connect } from 'react-redux';
import CollectionForm from './CollectionForm.jsx';
import Game from './Game.jsx';
import { updateUsername, getGamesSuccess } from './../actions'; // These are the only action creators made so far.

/*
 * Closest we get to a "global" state set for our app, as this is the top level "root" component.
 * http://andrewhfarmer.com/react-ajax-best-practices/
 */
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  /*
   * Render subcomponents for <main> html element
   */
  render() {
    const games = this.props.games;
    return (
      <main className="row">
        <aside className="col-xs-4">
          <CollectionForm buttonText="Get Collection" onInputChange={this.props.handleInputChange} onButtonClick={this.props.handleButtonClick} />
        </aside>
        <ul className="Games col-xs-8">
          {games.map(game => <Game name={game.name} />)}
        </ul>
      </main>
    );
  }
}

/*
 * These two functions work along with the store that Provider bases to Main.
 * The mapStateToProps lets you grab whatever state values you may need here.
 * The mapDispatchToProps lets you define small functions that dispatch action creators.
 * And that crazy (connect) syntax ties it all together, making everything available in props.
 */
const mapStateToProps = state => ({
  username: state.username,
  games: state.games,
});

const mapDispatchToProps = dispatch => ({
  handleInputChange: (username) => { dispatch(updateUsername(username)); },
  handleButtonClick: (games) => { dispatch(getGamesSuccess(games)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
