import "../styles/gameScreen.css";
import EndScreen from "./endScreen";
import { useState, useEffect } from "react";
import { useGameContext, useGameDispatchContext } from "../gameContext";
export default function GameScreen({ setIsGameStarted }) {
  const gameStateValues = useGameContext();
  const dispatch = useGameDispatchContext();
  const [key, setKey] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const selectedCards = gameStateValues.selectedCards;
  const gameOver = gameStateValues.gameOver;
  console.log(selectedCards);

  function handleCardClick(cardId) {
    dispatch({
      type: "card-clicked",
      cardId: cardId,
    });
  }
  useEffect(() => {
    // Update the key to trigger a re-render and apply the animation
    setKey((prevKey) => prevKey + 1);
  }, [gameStateValues.cardsToShow]);

  useEffect(() => {
    if (gameOver) {
      setIsGameOver(true);
      dispatch({
        type: "reset-state",
      });
    }
  }, [gameOver, dispatch]);

  return (
    <div>
      {!isGameOver ? (
        <div
          className="gameScreenDiv"
          style={
            isGameOver ? { pointerEvents: "none" } : { pointerEvents: "auto" }
          }
        >
          <div className="scoreDisplay">
            <p className="score">Score:&nbsp;{gameStateValues.currentScore}</p>
            <p className="score">
              Best Score:&nbsp;{gameStateValues.bestScore}
            </p>
            {isGameOver && <p>Game Over</p>}
          </div>
          <div className="cardContainerDiv">
            {gameStateValues.cardsToShow.map((card) => (
              <div key={card.id} className="cardDiv">
                <img
                  className="cardFrontImage"
                  src={card.url}
                  key={`${card.id}_${key}`}
                  alt={card.name}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleCardClick(card.id);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <EndScreen
          setIsGameStarted={setIsGameStarted}
          setIsGameOver={setIsGameOver}
        />
      )}
    </div>
  );
}
