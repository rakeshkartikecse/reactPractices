import React from "react";
import ReactDOM from "react-dom";

const imga = "https://picsum.photos/500";
ReactDOM.render(
  <div>
    <h1 className="heading">Created by Kartike</h1>
    <img src={imga} />
  </div>,
  document.getElementById("root")
);
