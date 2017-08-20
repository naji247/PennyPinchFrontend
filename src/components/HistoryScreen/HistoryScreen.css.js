import React, { StyleSheet } from "react-native";
import * as colors from "../../style/colors";
module.exports = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: colors.appWhite
  },
  header: {
    backgroundColor: colors.appCyan
  },
  headerTitle: {
    color: colors.appWhite,
    fontFamily: "HelveticaNeue"
  },
  listView: {
    padding: 12,
    flexDirection: "column",
    backgroundColor: colors.appWhite,
    alignItems: "flex-start"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  transactionRow: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderBottomColor: "black",
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
    fontSize: 20,
    margin: 10,
    fontFamily: "HelveticaNeue-Light"
  },
  amount: {
    flex: 1,
    margin: 10,
    color: "black",
    fontSize: 20,
    fontFamily: "HelveticaNeue",
    textAlign: "right"
  },
  listHeader: {
    margin: 10,
    fontSize: 18,
    fontFamily: "HelveticaNeue",
    marginRight: 100
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center"
  },
  emptyText: { textAlign: "center", margin: 20 }
});
