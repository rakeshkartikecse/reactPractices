import React from "react";
import ReactDOM from "react-dom";

const d = new Date();
const currentTime = d.getHours();
let greeting;
const customStyle = {
  color: ""
};

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Evening";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading">{greeting}</h1>
  </div>,
  document.getElementById("root")
);
