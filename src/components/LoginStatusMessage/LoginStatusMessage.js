import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationActions } from "react-navigation";
import * as styles from "./LoginStatusMessage.css";

const LoginStatusMessage = ({ isLoggedIn, dispatch }) => {
  if (!isLoggedIn) {
    return <Text>Please log in</Text>;
  }
  return (
    <View>
      <Text style={styles.welcome}>
        {'You are "logged in" right now'}
      </Text>
      <Button
        onPress={() =>
          dispatch(NavigationActions.navigate({ routeName: "Profile" }))}
        title="Create a Transaction"
      />
    </View>
  );
};

LoginStatusMessage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(LoginStatusMessage);
