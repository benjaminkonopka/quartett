// FISHER-YATES SHUFFLE ALGORITHM
export const shuffle = array => {
  const shuffeledArray = [];
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    if (Object.prototype.hasOwnProperty.call(shuffeledArray, currentIndex)) {
      temporaryValue = shuffeledArray[currentIndex];
    } else {
      temporaryValue = array[currentIndex];
    }
    shuffeledArray[currentIndex] = array[randomIndex];
    shuffeledArray[randomIndex] = temporaryValue;
  }

  return shuffeledArray;
};

// card distribution for players
export const getDistribution = (playerCount, cardCount) => {
  return Math.floor(cardCount / playerCount);
};
