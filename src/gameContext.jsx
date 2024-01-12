import { createContext, useContext, useReducer } from "react";
import cards, { getRandomDistinctItems } from "./cards";
import {
  saveDataToLocalStorage,
  getDataFromLocalStorage,
} from "./localStorageLoad";
const GameContext = createContext(null);
const GameDispatchContext = createContext(null);

const initialState = {
  gameOver: false,
  currentScore: 0,
  bestScore: getDataFromLocalStorage("cardGameScore"),
  cardsToShow: getRandomDistinctItems(cards, 4),
  selectedCards: [],
};

export default function GameContextProvider({ children }) {
  const [cardsState, dispatch] = useReducer(gameReducer, initialState);
  return (
    <GameContext.Provider value={cardsState}>
      <GameDispatchContext.Provider value={dispatch}>
        {children}
      </GameDispatchContext.Provider>
    </GameContext.Provider>
  );
}

export function useGameContext() {
  return useContext(GameContext);
}
export function useGameDispatchContext() {
  return useContext(GameDispatchContext);
}

function gameReducer(state, action) {
  switch (action.type) {
    case "card-clicked": {
      const cardId = action.cardId;
      const clickedCard = cards.find((card) => card.id === cardId);
      console.log(clickedCard);
      if (state.selectedCards.find((card) => card.id === cardId)) {
        return {
          ...state,
          gameOver: true,
          currentScore: 0, // Reset the score
          cardsToShow: getRandomDistinctItems(cards, 4),
          selectedCards: [], // Clear selected cards
          bestScore: Math.max(state.currentScore, state.bestScore),
        };
      }
      return {
        ...state,
        currentScore: state.currentScore + 1,
        cardsToShow: getRandomDistinctItems(cards, 4),
        selectedCards: [...state.selectedCards, clickedCard],
        bestScore: Math.max(state.currentScore + 1, state.bestScore),
      };
    }
    case "reset-state": {
      saveDataToLocalStorage("cardGameScore", state.bestScore);
      return {
        ...state,
        gameOver: false,
        currentScore: 0,
        bestScore: getDataFromLocalStorage("cardGameScore"),
        cardsToShow: getRandomDistinctItems(cards, 4),
        selectedCards: [],
      };
    }
    // eslint-disable-next-line no-fallthrough
    default: {
      return state;
    }
  }
}
