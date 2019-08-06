import { SET_GAME_STATE_ACTIVE, SET_GAME_STATE_INACTIVE } from '../actionTypes';
import { shuffle, getDistribution } from '../../helper';

const initialState = {
  gameState: 'INACTIVE',
  currentRound: 0,
  currentPlayers: {
    player1: {
      id: '0452d84c-af59-4f32-b167-28b390f787d1',
      deck: [],
    },
    player2: {
      id: '7a61b2d5-642e-4066-ab6f-c98c46cc15e3',
      deck: [],
    },
  },
};

const shuffleCardsIntoPlayersDecks = (state, action) => {
  // NOT HAPPY WITH THIS ONE
  // TODO Increase readability

  // SHUFFLE CARDS INTO EACH PLAYERS DECK
  const shuffledCards = shuffle(action.cards);
  const playerCount = Object.keys(state.currentPlayers).length;
  const cardsPerPlayer = getDistribution(playerCount, shuffledCards.length);
  const currentPlayersWithCards = {};

  for (let i = 0; i < playerCount; i += 1) {
    currentPlayersWithCards[`player${i + 1}`] = {
      id: state.currentPlayers[`player${i + 1}`].id,
      deck: shuffledCards.slice(i * cardsPerPlayer, (i + 1) * cardsPerPlayer),
    };
  }

  return currentPlayersWithCards;
};

const removeCardsFromPlayersDecks = state => {
  const playerCount = Object.keys(state.currentPlayers).length;
  const currentPlayers = {};

  for (let i = 0; i < playerCount; i += 1) {
    currentPlayers[`player${i + 1}`] = {
      id: state.currentPlayers[`player${i + 1}`].id,
      deck: [],
    };
  }
  return currentPlayers;
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_GAME_STATE_ACTIVE: {
      return {
        ...state,
        gameState: 'ACTIVE',
        currentPlayers: shuffleCardsIntoPlayersDecks(state, action),
      };
    }
    case SET_GAME_STATE_INACTIVE:
      // CLEAR DECK
      return {
        ...state,
        gameState: 'INACTIVE',
        currentPlayers: removeCardsFromPlayersDecks(state),
      };
    default:
      return state;
  }
}
