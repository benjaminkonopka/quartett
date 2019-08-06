import PLAYERS from '../../data/players';
import { SET_GAME_STATE_ACTIVE, SET_GAME_STATE_INACTIVE } from '../actionTypes';

const initialState = [...PLAYERS];

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_GAME_STATE_ACTIVE:
      return state;
    case SET_GAME_STATE_INACTIVE:
      return state;
    default:
      return state;
  }
}
