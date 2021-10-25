import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApparenceProvider } from "./contexts/Apparence";

ReactDOM.render(
  <React.StrictMode>
    <ApparenceProvider>
      <App />
    </ApparenceProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
