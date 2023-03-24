import React from "react";

function History({ history }) {
  return (
    <div>
      {history.map((item, index) => (
        <p key={index}>
          The {item.player} move to {item.position}.
        </p>
      ))}
    </div>
  );
}

export default History;
