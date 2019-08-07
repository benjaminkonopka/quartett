// FISHER-YATES SHUFFLE ALGORITHM
export const shuffle = array => {
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
};

// card distribution for players
export const getDistribution = (playerCount, cardCount) => {
  return Math.floor(cardCount / playerCount);
};
