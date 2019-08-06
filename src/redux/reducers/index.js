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
    players: players(state.players, { ...action }),
    // GAME NEEDS ALL CARDS AND PLAYER INFOS
    game: game(state.game, {
      ...action,
      cards: state.cards,
      players: state.players,
    }),
  };
};

export default rootReducer;
