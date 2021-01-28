import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers/shop-reducer";

const store = createStore(reducer);
console.log(store.getState())
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// Reducer es una función que EDITA nuestro estado GLOBAL
// dispatch: Manda acciones para modificar el estado
// getState: Captura el estado global
