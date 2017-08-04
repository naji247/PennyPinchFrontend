import React from "react";
import { StackNavigator } from "react-navigation";

import ChallengesScreen from "../components/ChallengesScreen/ChallengesScreen";
import AddFriendsScreen from "../components/ChallengesScreen/AddFriendsScreen";
import CreateChallengeScreen from "../components/ChallengesScreen/CreateChallengeScreen";
import ChallengeShowScreen from "../components/ChallengesScreen/ChallengeShowScreen";

export const ChallengeNavigator = StackNavigator({
  ChallengesScreen: { screen: ChallengesScreen },
  AddFriendsScreen: { screen: AddFriendsScreen },
  CreateChallengeScreen: { screen: CreateChallengeScreen },
  ChallengeShowScreen: { screen: ChallengeShowScreen }
});

ChallengeNavigator.navigationOptions = {
  header: null
};

export default ChallengeNavigator;
