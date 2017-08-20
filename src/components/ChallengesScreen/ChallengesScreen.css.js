import React, { StyleSheet } from "react-native";
import * as colors from "../../style/colors";

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: colors.appWhite
  },
  header: {
    backgroundColor: colors.appCyan
  },
  headerTitle: {
    color: colors.appWhite
  },
  progressRow: {
    flexDirection: "row"
  },
  progressContainer: {
    flex: 1,
    margin: 5
  },
  listView: {
    padding: 12,
    backgroundColor: colors.appWhite,
    flexDirection: "column",
    alignItems: "flex-start"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  listHeader: {
    margin: 10,
    fontSize: 18,
    fontFamily: "HelveticaNeue",
    marginRight: 40
  },

  challengeRow: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth
  },

  textContainer: {
    flex: 1,
    flexDirection: "row",
    margin: 10
  },
  name: {
    flex: 1,
    color: "black",
    fontSize: 20,
    fontFamily: "HelveticaNeue-Light"
  },

  place: {
    flex: 1,
    color: "black",
    fontSize: 20,
    fontFamily: "HelveticaNeue-Light",
    textAlign: "right"
  }
});
