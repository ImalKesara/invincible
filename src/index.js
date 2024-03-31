import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "tachyons";
import { robots } from "./robots.js";
import reportWebVitals from "./reportWebVitals";
import Carlist from "./Cardlist.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Carlist robots={robots} />);

// ReactDOM.render(<h1> Hello world </h1>, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
