import { CHANGE_VOLUME, START_GAME, STOP_GAME } from './actionTypes';

export const changeVolumeToAction = payload => ({
  type: CHANGE_VOLUME,
  payload: {
    volume: payload.volume,
  },
});

export const startGameAction = () => ({
  type: START_GAME,
});
export const stopGameAction = () => ({
  type: STOP_GAME,
});
