import React, { StyleSheet } from "react-native";
import * as colors from "../../style/colors";

module.exports = StyleSheet.create({
  amountContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    borderBottomColor: colors.appDarkgrey,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    padding: 10
  },
  descriptionContainer: {
    flex: 8,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#F5FCFF",
    flexDirection: "row",
    padding: 10
  },

  amountInput: {
    flex: 1,
    backgroundColor: colors.appWhite,
    color: colors.appDarkgrey,
    fontSize: 20
  },

  descriptionInput: {
    flex: 1,
    backgroundColor: colors.appWhite,
    color: colors.appDarkgrey,
    fontSize: 20
  },
  selectTypeContainer: {
    flex: 1,
    backgroundColor: colors.appGreen,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  submitButton: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column"
  },
  submitButtonText: {
    color: colors.appWhite,
    fontSize: 20
  }
});
