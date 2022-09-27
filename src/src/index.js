// PACKAGES
import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";

// REDUX STORE
import { store } from "./Store/Store/configureStore";

// Components
import { Roots } from "./Services/Routes";

// CSS
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer autoClose={1500} />
      <Roots />
    </Provider>
  </React.StrictMode>
);
