import "../styles/startScreen.css";
import { useState } from "react";
export default function StartScreen({ setIsGameStarted }) {
  const [showInfo, setShowInfo] = useState(false);
  let styleForInfo;
  if (!showInfo) {
    styleForInfo = {
      borderBottom: "2px solid wheat",
      color: "wheat",
    };
  } else {
    styleForInfo = {
      borderBottom: "2px solid red",
      color: "red",
    };
  }
  return (
    <>
      <div className="startScreen">
        <h1 className="startScreenHeading">Memory Game</h1>
        <button
          className="btn btn-success startButton"
          onClick={() => setIsGameStarted(true)}
        >
          Start Game
        </button>
        <button
          className="infoBtn"
          style={styleForInfo}
          onClick={() => setShowInfo(!showInfo)}
        >
          Info&nbsp;<i className="bi bi-info-circle-fill"></i>
        </button>
        {showInfo && (
          <>
            <div className="gameDetails">
              <p className="gameDetailsParagraph">
                &quot;Do not click on the same card twice&quot;
              </p>
              <i
                className="bi bi-x-circle closeGameDetails"
                onClick={() => setShowInfo(!showInfo)}
              ></i>
            </div>
          </>
        )}
      </div>
    </>
  );
}
