import React, { StyleSheet } from "react-native";
import * as colors from "../../style/colors";
import { normalizePixels } from "../../style/normalizePixels";

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.appWhite
  }
});
