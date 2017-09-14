import React, { StyleSheet } from "react-native";
import * as colors from "../../style/colors";
import { normalizePixels } from "../../style/normalizePixels";

module.exports = StyleSheet.create({
  amountContainer: {
    paddingLeft: normalizePixels(12),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.appWhite,
    borderBottomColor: colors.appDivider,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    padding: normalizePixels(10)
  },
  descriptionContainer: {
    flex: 7,
    backgroundColor: colors.appWhite,
    marginTop: normalizePixels(10),
    flexDirection: "row",
    paddingLeft: normalizePixels(12)
  },

  amountInput: {
    flex: 1,
    backgroundColor: colors.appWhite,
    fontSize: normalizePixels(15),
    fontFamily: "HelveticaNeue"
  },

  descriptionInput: {
    flex: 1,
    height: normalizePixels(60),
    backgroundColor: colors.appWhite,
    fontSize: normalizePixels(15),
    fontFamily: "HelveticaNeue"
  },
  selectTypeContainer: {
    height: normalizePixels(70),
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
    fontSize: normalizePixels(15),
    fontFamily: "HelveticaNeue"
  }
});
