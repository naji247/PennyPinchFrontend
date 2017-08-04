import React from "react";
import { StyleSheet, View } from "react-native";
import FBLoginButton from "../FBLoginButton/FBLoginButton";
import UserOptions from "../UserOptions/UserOptions";
import * as styles from "./MainScreen.css";

const MainScreen = () =>
  <View style={styles.container}>
    <FBLoginButton style={styles.fbLogin} />
  </View>;

MainScreen.navigationOptions = {
  title: "Home Screen"
};

export default MainScreen;
