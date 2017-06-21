import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import * as styles from "./ProfileScreen.css";

const ProfileScreen = ({ user }) =>
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Welcome, {user.name}
    </Text>
  </View>;

ProfileScreen.navigationOptions = {
  title: "Profile"
};

const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
