import React from "react";
import { Provider } from "react-redux";
import { View, Text } from "react-native";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

import AppReducer from "./src/reducers";
import AppWithNavigationState from "./src/navigators/AppNavigator";

export default class App extends React.Component {
  store = createStore(AppReducer, applyMiddleware(logger));
  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
