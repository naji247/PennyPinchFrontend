import React, { PropTypes } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import FBLoginButton from "../FBLoginButton/FBLoginButton";
import { loginAction } from "../../actions/authActions";
import * as styles from "./LoginScreen.css";

const LoginScreen = ({ navigation }) =>
  <View style={styles.container}>
    <FBLoginButton style={styles.fbLogin} />
  </View>;

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

LoginScreen.navigationOptions = {
  title: "Log In"
};

export default LoginScreen;
