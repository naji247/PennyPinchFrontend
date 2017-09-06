import React, { StyleSheet } from "react-native";
import * as colors from "../../style/colors";
module.exports = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: colors.appWhite
  },
  header: {
    backgroundColor: colors.appCyan
  },
  headerTitle: {
    color: colors.appWhite
    // fontFamily: "HelveticaNeue"
  },
  icon: {
    width: 26,
    height: 26
  },
  listView: {
    padding: 0,
    flexDirection: "column",
    backgroundColor: colors.appWhite,
    alignItems: "flex-start"
  },
  welcome: {
    fontSize: 15,
    textAlign: "center",
    margin: 10
  },
  transactionRow: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderBottomColor: colors.appDivider,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 5
  },
  date: {
    flex: 2,
    color: colors.appDarkgrey,
    fontSize: 15,
    fontFamily: "HelveticaNeue-Thin"
  },
  description: {
    flex: 4,
    color: colors.appDarkgrey,
    fontSize: 15,
    margin: 10,
    fontFamily: "HelveticaNeue"
  },
  amount: {
    flex: 1,
    margin: 10,
    color: colors.appBlack,
    fontSize: 15,
    fontFamily: "HelveticaNeue-Medium",
    textAlign: "right"
  },
  listHeader: {
    margin: 5,
    marginBottom: 25,
    marginTop: 35,
    fontSize: 15,
    flex: 1,
    fontFamily: "HelveticaNeue-Medium"
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center"
  },
  emptyText: { textAlign: "center", margin: 20 }
});
