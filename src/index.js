import React from "react";
import ReactDOM from "react-dom";

function Heading() {
  return <h1>My favourite food is</h1>;
}

ReactDOM.render(
  <div>
    <Heading />
    <ul>
      <li>Beacon</li>
      <li>Fruits</li>

      <li>Mango</li>
    </ul>
  </div>,
  document.getElementById("root")
);
