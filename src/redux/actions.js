import {
  CHANGE_VOLUME,
  SET_GAME_STATE_ACTIVE,
  SET_GAME_STATE_INACTIVE,
} from './actionTypes';

export const changeVolumeToAction = payload => ({
  type: CHANGE_VOLUME,
  payload: {
    volume: payload.volume,
  },
});

export const setGameStateActiveAction = payload => ({
  type: SET_GAME_STATE_ACTIVE,
  payload: {
    playerCount: payload.playerCount,
  },
});
export const setGameStateInactiveAction = () => ({
  type: SET_GAME_STATE_INACTIVE,
});
