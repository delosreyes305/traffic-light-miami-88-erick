import React, { useState } from "react";

export const TrafficLight = () => {
  const [color, setColor] = useState("red");

  const nextColor = () => {
    if (color === "red") setColor("yellow");
    else if (color === "yellow") setColor("green");
    else setColor("red");
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-3">
        <div className="traffic-box p-3 rounded">
          <div
            onClick={() => setColor("red")}
            className={`light red ${color === "red" ? "glow" : ""}`}
          ></div>

          <div
            onClick={() => setColor("yellow")}
            className={`light yellow mt-3 ${color === "yellow" ? "glow" : ""}`}
          ></div>

          <div
            onClick={() => setColor("green")}
            className={`light green mt-3 ${color === "green" ? "glow" : ""}`}
          ></div>
        </div>
      </div>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <button onClick={nextColor} className="btn btn-primary mt-3 w-100">
            Next
          </button>
        </div>
        <div className="col-4"></div>
      </div>
    </>
  );
};

export default TrafficLight;
