import React, { StyleSheet } from "react-native";
import * as colors from "../../style/colors";

module.exports = StyleSheet.create({
  amountContainer: {
    paddingLeft: 12,
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
    flex: 4,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#F5FCFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 12
  },

  amountInput: {
    flex: 1,
    backgroundColor: colors.appWhite,
    color: colors.appDarkgrey,
    fontSize: 20
  },

  descriptionInput: {
    flex: 1,
    height: 60,
    backgroundColor: colors.appWhite,
    color: colors.appDarkgrey,
    fontSize: 20
  },
  selectTypeContainer: {
    height: 70,
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
