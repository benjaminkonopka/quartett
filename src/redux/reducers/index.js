import { combineReducers } from 'redux';
import gameSettings from './gameSettings';
import cards from './cards';

export default combineReducers({ gameSettings, cards });
