// @flow
import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, hashHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import configureStore from "./store/configure-store";
import getRoutes from "./routes";

const store = configureStore(hashHistory);
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={getRoutes(store)} />
  </Provider>,
  document.getElementById("react-root")
);
