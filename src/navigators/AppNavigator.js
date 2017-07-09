import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addNavigationHelpers, StackNavigator } from "react-navigation";

import LoginScreen from "../components/LoginScreen/LoginScreen";
import MainScreen from "../components/MainScreen/MainScreen";
import NewTransactionScreen from "../components/NewTransactionScreen/NewTransactionScreen";
import HistoryScreen from "../components/HistoryScreen/HistoryScreen";

export const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  Main: { screen: MainScreen },
  CreateTransaction: { screen: NewTransactionScreen },
  TransactionHistory: { screen: HistoryScreen }
});

const AppWithNavigationState = ({ dispatch, nav }) =>
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />;

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
