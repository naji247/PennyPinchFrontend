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
    flexDirection: "row"
  },
  descriptionContainer: {
    flex: 5,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#F5FCFF",
    flexDirection: "row"
  },

  amountInput: {
    flex: 1,
    backgroundColor: colors.appWhite,
    color: colors.appDarkgrey,
    fontSize: 20
  },

  descriptionInput: {
    flex: 4,
    backgroundColor: colors.appWhite,
    color: colors.appDarkgrey,
    fontSize: 20
  },
  selectTypeContainer: {
    flex: 1,
    backgroundColor: colors.appDeepBlue,
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
