import { START_GAME, STOP_GAME } from '../actionTypes';

const initialState = {
  gameState: 'INACTIVE',
  currentRound: 0,
  currentPlayers: {
    player1: '0452d84c-af59-4f32-b167-28b390f787d1',
    player2: '7a61b2d5-642e-4066-ab6f-c98c46cc15e3',
    player3: '',
    player4: '',
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        gameState: 'ACTIVE',
      };
    case STOP_GAME:
      return {
        ...state,
        gameState: 'INACTIVE',
      };
    default:
      return state;
  }
}
