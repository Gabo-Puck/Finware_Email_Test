import React from "react";

import { createRoot } from "react-dom/client";

import App from "./src/App";
import { Provider } from "react-redux/es/exports";
import store from "./src/store";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
