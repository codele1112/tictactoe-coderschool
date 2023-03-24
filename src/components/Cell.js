import "./Cell.css";
import React from "react";

function Cell({
  id,
  cell,
  setCells,
  go,
  setGo,
  cells,
  winningMessage,
  history,
  setHistory,
}) {
  const handleClick = (e) => {
    if (!winningMessage) {
      const taken =
        e.target.firstChild.classList.contains("circle") ||
        e.target.firstChild.classList.contains("cross");

      if (!taken) {
        if (go === "circle") {
          e.target.firstChild.classList.add("circle");
          handleCellChange("circle");
          setGo("cross");
        }
        if (go === "cross") {
          e.target.firstChild.classList.add("cross");
          handleCellChange("cross");

          setGo("circle");
        }
      }

      const addMove = {
        player: `${e.target.firstChild.classList}`,
        position: `${e.target.id}`,
      };
      // console.log("addMove", addMove);

      const historyCopy = [...history];
      historyCopy.push(addMove);
      setHistory(historyCopy);
      console.log("historyCopy", historyCopy);

      return;
    }
  };

  const handleCellChange = (className) => {
    const nextCells = cells.map((cell, index) => {
      if (index === id) {
        return className;
      } else {
        return cell;
      }
    });
    setCells(nextCells);
  };

  return (
    <>
      <div className="square" id={id} onClick={handleClick}>
        <div className={cell}></div>
      </div>
    </>
  );
}

export default Cell;
