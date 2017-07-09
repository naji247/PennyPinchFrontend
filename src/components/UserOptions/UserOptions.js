import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationActions } from "react-navigation";
import * as styles from "./UserOptions.css";

const UserOptions = ({ isLoggedIn, dispatch }) => {
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
          dispatch(
            NavigationActions.navigate({ routeName: "CreateTransaction" })
          )}
        title="Create a Transaction"
      />
      <Button
        onPress={() =>
          dispatch(
            NavigationActions.navigate({ routeName: "TransactionHistory" })
          )}
        title="History"
      />
    </View>
  );
};

UserOptions.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(UserOptions);
