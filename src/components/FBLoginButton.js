import React, { PropTypes } from "react";
import { Button } from "react-native";
import Expo from "expo";
import { connect } from "react-redux";

const FBLoginButton = ({ login }) =>
  <Button title="Log In with Facebook" onPress={login} />;

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  login: () => login(dispatch)
});

async function login(dispatch) {
  const {
    type,
    token
  } = await Expo.Facebook.logInWithReadPermissionsAsync("235578963603256", {
    permissions: ["public_profile"]
  });
  if (type === "success") {
    // Get the user's name using Facebook's Graph API
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}`
    );
    body = await response.json();
    dispatch({ type: "Login", name: body.name });
    console.log("Logged in!", `Hi ${body.name}!`);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FBLoginButton);
