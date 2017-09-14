import React, { StyleSheet } from "react-native";
import * as colors from "../../style/colors";
import { normalizePixels } from "../../style/normalizePixels";
module.exports = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: colors.appWhite
  },
  header: {
    backgroundColor: colors.appCyan
  },
  headerTitle: {
    color: colors.appWhite,
    fontSize: normalizePixels(20)
  },
  icon: {
    width: 26,
    height: 26
  },
  listView: {
    paddingLeft: normalizePixels(25),
    paddingRight: normalizePixels(25),
    flexDirection: "column",
    backgroundColor: colors.appWhite,
    alignItems: "flex-start"
  },
  welcome: {
    fontSize: normalizePixels(15),
    textAlign: "center",
    margin: normalizePixels(10)
  },
  transactionRow: {
    flexDirection: "row",
    marginTop: normalizePixels(5),
    marginBottom: normalizePixels(5),
    borderBottomColor: colors.appDivider,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    margin: normalizePixels(5)
  },
  date: {
    flex: 2,
    color: colors.appDarkgrey,
    fontSize: normalizePixels(15),
    fontFamily: "HelveticaNeue-Thin"
  },
  description: {
    flex: 4,
    color: colors.appDarkgrey,
    fontSize: normalizePixels(15),
    margin: normalizePixels(5),
    fontFamily: "HelveticaNeue"
  },
  amount: {
    flex: 1,
    margin: normalizePixels(5),
    color: colors.appBlack,
    fontSize: normalizePixels(15),
    fontFamily: "HelveticaNeue-Medium",
    textAlign: "right"
  },
  listHeader: {
    margin: normalizePixels(5),
    marginBottom: normalizePixels(25),
    marginTop: normalizePixels(35),
    fontSize: normalizePixels(15),
    flex: 1,
    fontFamily: "HelveticaNeue-Medium"
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center"
  },
  emptyText: {
    textAlign: "center",
    margin: normalizePixels(20),
    fontSize: normalizePixels(15),
    fontFamily: "HelveticaNeue"
  }
});
