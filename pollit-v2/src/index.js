import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "Model/store/configureStore";

import App from "View/App/App";

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
