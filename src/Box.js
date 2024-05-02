import React from "react";
import "./Box.css";

function Box({
  id,
  handleRemove,
  width = 100,
  height = 100,
  backgroundColor = "black",
}) {
  const remove = () => handleRemove(id);

  return (
    <div>
      <div
        className="Box"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor,
        }}
      />

      <button onClick={remove}>X</button>
    </div>
  );
}

export default Box;
