import React, { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: "column",
    alignItems: "flex-start"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  transactionRow: {
    flexDirection: "row"
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    height: 20
  },
  date: {
    flex: 2
  },
  description: {
    flex: 4
  },
  amount: {
    flex: 1
  }
});
