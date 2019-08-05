import CARDS from '../../data/cards';

const initialState = [...CARDS];

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
