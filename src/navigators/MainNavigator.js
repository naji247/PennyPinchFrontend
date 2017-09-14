import React from "react";
import { TabNavigator } from "react-navigation";

import NewTransactionScreen from "../components/NewTransactionScreen/NewTransactionScreen";
import HistoryScreen from "../components/HistoryScreen/HistoryScreen";
import ChallengeNavigator from "./ChallengeNavigator";
import * as colors from "../style/colors";
import { normalizePixels } from "../style/normalizePixels";

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
      style: {
        backgroundColor: colors.appBlack
      },
      labelStyle: { fontSize: normalizePixels(13), color: colors.appWhite },
      activeBackgroundColor: colors.appTransparentDarkgrey
    }
  }
);

MainNavigator.navigationOptions = {};

export default MainNavigator;
