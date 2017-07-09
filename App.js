import React from "react";
import { Provider } from "react-redux";
import { View, Text, AsyncStorage } from "react-native";
import { compose, applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { persistStore, autoRehydrate } from "redux-persist";
import { initializeAuth } from "./src/actions/authActions";
import AppReducer from "./src/reducers";
import AppWithNavigationState from "./src/navigators/AppNavigator";
import { LoadingComponent } from "./src/components/UtilityComponents/LoadingComponents";

const store = createStore(
  AppReducer,
  undefined,
  compose(applyMiddleware(logger), autoRehydrate())
);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { rehydrated: false };
  }

  componentWillMount() {
    persistStore(store, { storage: AsyncStorage }, async () => {
      const user = store.getState().auth.user;
      const initializingAction = await initializeAuth(user);
      store.dispatch(initializingAction);
      this.setState({ rehydrated: true });
    });
  }

  render() {
    if (!this.state.rehydrated) {
      return <LoadingComponent size="large" />;
    }
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
