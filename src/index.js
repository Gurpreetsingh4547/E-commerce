// PACKAGES
import React from "react";
import ReactDOM from "react-dom/client";

// Components
import { Roots } from "./Services/Routes";

// CSS
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Roots />
  </React.StrictMode>
);
