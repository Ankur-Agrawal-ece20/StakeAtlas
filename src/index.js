import "animate.css/animate.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../src/redux/Store";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
