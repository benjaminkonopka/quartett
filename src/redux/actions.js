import { CHANGE_VOLUME } from './actionTypes';

export const changeVolumeToAction = payload => ({
  type: CHANGE_VOLUME,
  payload: {
    volume: payload.volume,
  },
});

export const differentAction = () => {};
