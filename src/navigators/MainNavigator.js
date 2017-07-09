import React from "react";
import { TabNavigator } from "react-navigation";

import MainScreen from "../components/MainScreen/MainScreen";
import NewTransactionScreen from "../components/NewTransactionScreen/NewTransactionScreen";
import HistoryScreen from "../components/HistoryScreen/HistoryScreen";

export const MainNavigator = TabNavigator({
  CreateTransaction: { screen: NewTransactionScreen },
  TransactionHistory: { screen: HistoryScreen },
  MainScreen: { screen: MainScreen }
});

MainNavigator.navigationOptions = {
  headerLeft: null
};

export default MainNavigator;
