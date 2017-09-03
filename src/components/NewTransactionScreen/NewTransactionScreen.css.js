import React, { StyleSheet } from "react-native";
import * as colors from "../../style/colors";

module.exports = StyleSheet.create({
  header: {
    backgroundColor: colors.appCyan
  },
  headerTitle: {
    color: colors.appWhite
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.appWhite
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  icon: {
    height: 26,
    width: 26
  }
});
