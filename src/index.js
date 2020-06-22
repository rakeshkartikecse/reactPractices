import React from "react";
import ReactDOM from "react-dom";

const num = 7;
ReactDOM.render(
  <div>
    <h1>Hello Kartike</h1>
    <p> Your Lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
