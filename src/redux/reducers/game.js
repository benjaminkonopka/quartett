import {
  SET_GAME_STATE_ACTIVE,
  SET_GAME_STATE_INACTIVE,
  CARD_VALUE_SELECTED,
} from '../actionTypes';
import { shuffle, getDistribution } from '../../helper';

const initialState = {
  gameState: 'INACTIVE',
  currentRound: 0,
  currentPlayers: {},
};

const addPlayersById = (amount, players) => {
  const currentPlayers = {};

  for (let i = 0; i < amount; i += 1) {
    currentPlayers[`player${i + 1}`] = {
      id: players[i].id,
      deck: [],
    };
  }
  return currentPlayers;
};

const shuffleCardsIntoPlayersDecks = (currentPlayers, cards) => {
  // SHUFFLE CARDS INTO EACH PLAYERS DECK
  const shuffledCards = shuffle(cards);
  const playerCount = Object.keys(currentPlayers).length;
  const cardsPerPlayer = getDistribution(playerCount, shuffledCards.length);
  const currentPlayersWithCards = {};

  for (let i = 0; i < playerCount; i += 1) {
    currentPlayersWithCards[`player${i + 1}`] = {
      ...currentPlayers[`player${i + 1}`], // TODO REWORK ?
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
      ...state.currentPlayers[`player${i + 1}`], // TODO REWORK ?
      deck: [],
    };
  }
  return currentPlayers;
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_GAME_STATE_ACTIVE: {
      const currentPlayers = addPlayersById(
        action.payload.playerCount,
        action.players
      );
      const currentPlayersWithCards = shuffleCardsIntoPlayersDecks(
        currentPlayers,
        action.cards
      );

      // SHUFFLE DECK
      return {
        ...state,
        gameState: 'ACTIVE',
        currentPlayers: currentPlayersWithCards,
      };
    }
    case SET_GAME_STATE_INACTIVE:
      // CLEAR DECK
      return {
        ...state,
        gameState: 'INACTIVE',
        currentPlayers: removeCardsFromPlayersDecks(state),
      };
    case CARD_VALUE_SELECTED:
      // COMPARE CARDS, DISTRIBUTE CARDS, CHECK WIN CONDITION
      // TODO
      // const cardValueId = action.payload.seqId;
      return {
        ...state,
      };
    default:
      return state;
  }
}
