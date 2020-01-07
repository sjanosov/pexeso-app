import { CHARACTERS, BOARD_SIZE, CARD_COUNT } from "./constants";

export const getStartState = () => {
  let i = 0;
  let numbers = Array.from(random(0, 11, 8));
  numbers = numbers.concat(numbers);
  shuffle(numbers);
  return {
    board: Array.from({ length: BOARD_SIZE }, () =>
      Array.from({ length: BOARD_SIZE }, () => {
        return CHARACTERS[numbers[i++]];
      })
    ),
    score: 0,
    firstCardClicked: null,
    moves: 0,
    allowClicking: true
  };
};

export const onCardClick = (currentState, indexRow, indexCol, mainSetState) => {
  let currentlyCardClicked = null;
  let allowClicking = true;
  let newBoard = currentState.board.map((row, rowIndex) =>
    rowIndex === indexRow
      ? row.map((col, colIndex) => {
          if (colIndex === indexCol && col.clicked === false) {
            currentlyCardClicked = { ...col, clicked: true };
            return currentlyCardClicked;
          } else {
            return col;
          }
        })
      : row
  );
  if (currentState.firstCardClicked !== null && currentlyCardClicked !== null) {
    currentState.moves++;
    if (!checkMatch(currentState.firstCardClicked, currentlyCardClicked)) {
      allowClicking = false;
      hideUnmatched(
        currentState,
        currentState.firstCardClicked,
        currentlyCardClicked,
        mainSetState
      );
    } else {
      currentState.score++;
    }
  }

  const newState = {
    ...currentState,
    allowClicking: allowClicking,
    board: newBoard,
    firstCardClicked:
      currentState.firstCardClicked !== null ? null : currentlyCardClicked
  };
  return newState;
};

const checkMatch = (firstClicked, secondClicked) => {
  return firstClicked.id === secondClicked.id;
};

const hideUnmatched = async (
  currentState,
  firstCardClicked,
  secondClicked,
  mainSetState
) => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  let newBoard = currentState.board.map(row =>
    row.map(col =>
      firstCardClicked.id === col.id || secondClicked.id === col.id
        ? { ...col, clicked: false }
        : col
    )
  );
  mainSetState({
    ...currentState,
    firstCardClicked:
      currentState.firstCardClicked !== null ? null : secondClicked,
    board: newBoard,
    allowClicking: true
  });
};

const random = (min, max, length) => {
  var numbers = new Set();

  function _random(min, max) {
    let ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return ranNum;
  }

  while (numbers.size < length) {
    numbers.add(_random(min, max));
  }
  return numbers;
};

const shuffle = array => {
  array.sort(() => Math.random() - 0.5);
};
