import React, { Component } from "react";
import { TouchableHighlight, Text } from "react-native";
import * as colors from "../../style/colors";
import { normalizePixels } from "../../style/normalizePixels";
import { logout } from "../../actions/authActions";
const LogoutButton = ({ navigation }) => (
  <TouchableHighlight
    underlayColor={colors.appCyan}
    onPress={() => navigation.dispatch(logout())}
  >
    <Text
      style={{
        color: colors.appWhite,
        fontSize: normalizePixels(15),
        marginLeft: normalizePixels(8)
      }}
    >
      Logout
    </Text>
  </TouchableHighlight>
);
module.exports = {
  LogoutButton: LogoutButton
};
