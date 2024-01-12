import "../styles/endScreen.css";
export default function EndScreen({ setIsGameStarted, setIsGameOver }) {
  return (
    <>
      <div className="endScreenDiv">
        <div className="endScreenInfo">
          <p className="endScreenText">You Lose!</p>
          <div className="buttonContainer">
            <button
              className="endScreenBtn restartBtn"
              onClick={(e) => {
                e.stopPropagation();
                setIsGameOver(false);
                setIsGameStarted(true);
              }}
            >
              Restart
            </button>
            <button
              className="endScreenBtn quitBtn"
              onClick={(e) => {
                e.stopPropagation();
                setIsGameOver(false);
                setIsGameStarted(false);
              }}
            >
              Quit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
