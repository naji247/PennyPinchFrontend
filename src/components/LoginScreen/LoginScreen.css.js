import React, { StyleSheet } from "react-native";
import { normalizePixels } from "../../style/normalizePixels";

module.exports = StyleSheet.create({
  fbLogin: {
    flexDirection: "row",
    marginLeft: "5%",
    marginRight: "5%"
  },
  backgroundContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  container: {
    flex: 1,
    alignItems: "center"
  },
  overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    marginBottom: 200,
    backgroundColor: "transparent",
    height: 113,
    width: 259
  },
  backdrop: {
    flex: 1,
    flexDirection: "column"
  },
  headline: {
    fontSize: normalizePixels(18),
    textAlign: "center",
    color: "white"
  }
});
