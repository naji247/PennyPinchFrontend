import React from "react";
import { TabNavigator } from "react-navigation";

import NewTransactionScreen from "../components/NewTransactionScreen/NewTransactionScreen";
import HistoryScreen from "../components/HistoryScreen/HistoryScreen";
import ChallengeNavigator from "./ChallengeNavigator";

export const MainNavigator = TabNavigator({
  CreateTransaction: { screen: NewTransactionScreen },
  TransactionHistory: { screen: HistoryScreen },
  Challenges: { screen: ChallengeNavigator }
});

MainNavigator.navigationOptions = {};

export default MainNavigator;
