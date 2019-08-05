import PLAYERS from '../../data/players';

const initialState = [...PLAYERS];

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
