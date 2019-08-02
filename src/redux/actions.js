import { CHANGE_VOLUME } from "./actionTypes";

export const changeVolumeTo = payload => ({
    type: CHANGE_VOLUME,
    payload: {
        volume: payload.volume
    }
});
