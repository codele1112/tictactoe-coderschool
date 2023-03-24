/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Cell from "./components/Cell";
import History from "./components/History";

function Game() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage] = useState(null);
  const [history, setHistory] = useState([]);

  const message = "It is now " + go + "'s go.";
  // console.log(cells);

  const checkScore = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    lines.forEach((arr) => {
      let circleWins = arr.every((cell) => cells[cell] === "circle");

      if (circleWins) {
        setWinningMessage("Circle Wins!");
        return;
      }
    });

    lines.forEach((arr) => {
      let crossWins = arr.every((cell) => cells[cell] === "cross");

      if (crossWins) {
        setWinningMessage("Cross Wins!");
        return;
      }
    });
  };

  useEffect(() => {
    checkScore();
  }, [cells]);

  return (
    <div>
      <div className="game-title">tic tac toe</div>
      <div className="game-area">
        <div className="game-board">
          {cells.map((cell, index) => (
            <Cell
              key={index}
              id={index}
              cell={cell}
              setCells={setCells}
              go={go}
              setGo={setGo}
              cells={cells}
              winningMessage={winningMessage}
              history={history}
              setHistory={setHistory}
            />
          ))}
        </div>
        <div className="history">
          <h1 className="history-title">History</h1>
          <History history={history} />
        </div>
      </div>

      <p className="message">{winningMessage || message}</p>
      <button className="reset" onClick={() => window.location.reload()}>
        Play again ?
      </button>
    </div>
  );
}

export default Game;
