import { combineReducers } from 'redux';
import { UPDATE_USERNAME, GET_GAMES_SUCCESS } from './actions';

/*
 * Redux's reducer functions take the previous state, and an action,
 * and then using that action, update the state accordingly.
 * As you respond to different action.types, never directly
 * alter the state. Instead, create a new Object and use assign().
 * This is an example of reducer composition. Notice how the states
 * are updated one key at a time, not the whole state object at once.
 * The method combineReducers then puts them all together.
 */
const username = (state = '', action) => {
  switch (action.type) {
    case UPDATE_USERNAME:
      return action.username;
    default:
      return state;
  }
};

const games = (state = [], action) => {
  switch (action.type) {
    case GET_GAMES_SUCCESS:
      return action.games;
    default:
      return state;
  }
};

const gameshelf = combineReducers({
  username,
  games,
});

export default gameshelf;
