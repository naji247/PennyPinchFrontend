import React, { PropTypes } from "react";
import {
  Button,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight
} from "react-native";
import { LoadingComponent } from "../UtilityComponents/LoadingComponents";
import { connect } from "react-redux";
import { login, logout } from "../../actions/authActions";
import * as styles from "./FBLoginButton.css";

const FBLoginButton = ({ style, login, logout, user, isLoading }) => {
  return (
    <View style={style}>
      <TouchableHighlight
        style={styles.container}
        onPress={user ? logout : login}
        underlayColor="transparent"
      >
        <View style={styles.FBLoginButton}>
          <Text
            style={[
              styles.FBLoginButtonText,
              user
                ? styles.FBLoginButtonTextLoggedIn
                : styles.FBLoginButtonTextLoggedOut
            ]}
            numberOfLines={1}
          >
            {user ? "Log Out" : "Login to start saving..."}
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  isLoading: state.auth.isLoading
});

const mapDispatchToProps = dispatch => ({
  login: () => login(dispatch),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(FBLoginButton);
