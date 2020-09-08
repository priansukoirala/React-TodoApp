import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import * as serviceWorker from "./serviceWorker";
import MyToDo from "./components/MyToDo";
import OurToDo from "./components/OurToDo";

ReactDOM.render(
  <React.StrictMode>
    <div className="mainContainer">
      <MyToDo />
      <OurToDo />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
