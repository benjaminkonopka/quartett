// import { combineReducers } from 'redux';
import gameSettings from './gameSettings';
import cards from './cards';
import game from './game';
import players from './players';

const rootReducer = (state = {}, action) => {
  // custom combineReducer function to pass different parts of the store around
  return {
    gameSettings: gameSettings(state.gameSettings, { ...action }),
    cards: cards(state.cards, { ...action }),
    game: game(state.game, { ...action, cards: state.cards }),
    players: players(state.players, { ...action }),
  };
};

export default rootReducer;
