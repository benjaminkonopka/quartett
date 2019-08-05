import { combineReducers } from 'redux';
import gameSettings from './gameSettings';
import cards from './cards';
import game from './game';
import players from './players';

export default combineReducers({ gameSettings, cards, game, players });
