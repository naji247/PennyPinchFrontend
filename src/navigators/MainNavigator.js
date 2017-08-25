import React from "react";
import { TabNavigator } from "react-navigation";

import NewTransactionScreen from "../components/NewTransactionScreen/NewTransactionScreen";
import HistoryScreen from "../components/HistoryScreen/HistoryScreen";
import ChallengeNavigator from "./ChallengeNavigator";
import * as colors from "../style/colors";

export const MainNavigator = TabNavigator(
  {
    TransactionHistory: { screen: HistoryScreen },
    CreateTransaction: { screen: NewTransactionScreen },
    Challenges: { screen: ChallengeNavigator }
  },
  {
    lazy: false,
    tabBarPosition: "bottom",
    tabBarOptions: {
      style: { backgroundColor: colors.appBlack },
      labelStyle: { color: colors.appWhite },
      activeBackgroundColor: colors.appCyan
    }
  }
);

MainNavigator.navigationOptions = {};

export default MainNavigator;
