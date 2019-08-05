import { CHANGE_VOLUME } from "../actionTypes";

const initialState = {
    volume: 100,
    sound: true,
    music: true
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE_VOLUME: {
            return {
                ...state,
                volume: action.payload.volume
            }
        }
        default:
            return state;
    }
}
