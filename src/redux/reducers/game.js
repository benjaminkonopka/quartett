import {
  SET_GAME_STATE_ACTIVE,
  SET_GAME_STATE_INACTIVE,
  CARD_VALUE_SELECTED,
} from '../actionTypes';
import { shuffle } from '../../helper';

const initialState = {
  gameState: 'INACTIVE',
  currentPlayers: {},
};

// TODO EXPORT LOGIC TO SEPERATE FILES ???
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

// TODO EXPORT LOGIC TO SEPERATE FILES ???
const shuffleCardsIntoPlayersDecks = (currentPlayers, cards) => {
  // SHUFFLE CARDS INTO EACH PLAYERS DECK
  const shuffledCards = shuffle(cards);
  const playerCount = Object.keys(currentPlayers).length;
  const cardsPerPlayer = Math.floor(shuffledCards.length / playerCount);
  const currentPlayersWithCards = {};

  Object.keys(currentPlayers).forEach((key, index) => {
    currentPlayersWithCards[key] = {
      ...currentPlayers[key],
      deck: shuffledCards.slice(
        index * cardsPerPlayer,
        (index + 1) * cardsPerPlayer
      ),
    };
  });

  return currentPlayersWithCards;
};

// TODO EXPORT LOGIC TO SEPERATE FILES ???
const removeCardsFromPlayersDecks = currentPlayers => {
  const currentPlayersUpdated = {};

  Object.keys(currentPlayers).forEach(key => {
    currentPlayersUpdated[key] = {
      ...currentPlayers[key],
      deck: [],
    };
  });

  return currentPlayersUpdated;
};

// TODO EXPORT LOGIC TO SEPERATE FILES ???
const getRoundWinnerId = (currentPlayers, seqId) => {
  let winningPlayerId = '';
  let currentHighestValue = 0;
  // iterate through players
  Object.keys(currentPlayers).forEach(key => {
    const currentPlayer = currentPlayers[key];
    const currentDeck = currentPlayer.deck;
    const currentCard = currentDeck[0];

    // iterate over the values
    currentCard.values.forEach(value => {
      // check selected value
      if (value.seqId === seqId) {
        // check highest winner
        // TODO ADD DRAW POSSIBILITY
        if (value.value > currentHighestValue) {
          currentHighestValue = value.value;
          winningPlayerId = currentPlayer.id;
        }
      }
    });
  });
  return winningPlayerId;
};

// TODO EXPORT LOGIC TO SEPERATE FILES ???
const distributeCardsToWinner = (currentPlayers, winningPlayerId) => {
  const currentPlayersWithNewCardsDistribution = {};
  const losingCards = [];

  // losing Players
  Object.keys(currentPlayers).forEach(key => {
    if (currentPlayers[key].id !== winningPlayerId) {
      losingCards.push(...currentPlayers[key].deck.slice(0, 1));

      currentPlayersWithNewCardsDistribution[key] = {
        ...currentPlayers[key],
        deck: [...currentPlayers[key].deck.slice(1)],
      };
    }
  });

  // winning player
  Object.keys(currentPlayers).forEach(key => {
    if (currentPlayers[key].id === winningPlayerId) {
      currentPlayersWithNewCardsDistribution[key] = {
        ...currentPlayers[key],
        deck: [
          ...currentPlayers[key].deck.slice(1), // cards 2...x
          ...losingCards, // losing players cards
          ...currentPlayers[key].deck.slice(0, 1), // winning card
        ],
      };
    }
  });

  return currentPlayersWithNewCardsDistribution;
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
        currentPlayers: removeCardsFromPlayersDecks(state.currentPlayers),
      };
    case CARD_VALUE_SELECTED: {
      // COMPARE CARDS
      const winningPlayerId = getRoundWinnerId(
        state.currentPlayers,
        action.payload.seqId
      );

      // DISTRIBUTE CARDS
      const currentPlayersNew = distributeCardsToWinner(
        state.currentPlayers,
        winningPlayerId
      );

      // TODO REMOVE PLAYER IF 0 CARDS
      // TODO CHECK WIN CONDITION

      return {
        ...state,
        currentPlayers: currentPlayersNew,
      };
    }
    default:
      return state;
  }
}
