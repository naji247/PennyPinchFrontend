import React, { StyleSheet } from "react-native";
import * as colors from "../../style/colors";
import { normalizePixels } from "../../style/normalizePixels";

module.exports = StyleSheet.create({
  header: {
    backgroundColor: colors.appCyan
  },
  headerTitle: {
    color: colors.appWhite,
    fontSize: normalizePixels(20)
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.appWhite
  },
  welcome: {
    fontSize: normalizePixels(20),
    textAlign: "center",
    margin: normalizePixels(10)
  },
  icon: {
    height: 26,
    width: 26
  }
});
