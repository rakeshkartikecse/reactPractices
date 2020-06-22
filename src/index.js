import React from "react";
import ReactDOM from "react-dom";

const currentDate = new Date();
console.log(currentDate);
const year = currentDate.getFullYear();
ReactDOM.render(
  <div>
    <h1>Created by Kartike</h1>
    <div>Copyrighted {year}</div>
  </div>,
  document.getElementById("root")
);
