import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store";
import * as sessionActions from "./store/session";
import { csrfFetch, restoreCSRF } from "./store/csrf";
import { ModalProvider } from "./context/Modal";

const store = configureStore();
restoreCSRF();

window.csrfFetch = csrfFetch;
window.store = store;
window.sessionActions = sessionActions;

function Root() {
  return (
    <Provider store={store}>
      <ModalProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModalProvider>
    </Provider>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Root />);
