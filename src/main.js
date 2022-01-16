import React from "react";
import ReactDOM from "react-dom";
import "./styles/all.scss";

import MainComponent from "./components/MainComponent";
import App from "./components/App";

const component = MainComponent("My component text");

document.querySelector("body").appendChild(component);
ReactDOM.render(<App />, document.getElementById("root"));
