/*
 * These action types will be used by the reducer functions,
 * and can be named whatever you'd like.
 */
export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const GET_GAMES_SUCCESS = 'GET_GAMES_SUCCESS';

/*
 * These action creators are needed for store.dispatch()
 * which is how you trigger the actions, and therefore,
 * a change in state.
 */
export const updateUsername = username => ({
  type: UPDATE_USERNAME,
  username,
});

export const getGamesSuccess = games => ({
  type: GET_GAMES_SUCCESS,
  games,
});
