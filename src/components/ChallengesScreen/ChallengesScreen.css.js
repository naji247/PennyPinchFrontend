import React, { StyleSheet } from "react-native";
import * as colors from "../../style/colors";

module.exports = StyleSheet.create({
  friendScreen: {
    flex: 1,
    padding: 10,
    flexDirection: "column",
    backgroundColor: colors.appWhite,
    justifyContent: "center"
  },
  newChalName: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },

  newChalNameContainer: {
    flexDirection: "row"
  },
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
  icon: {
    width: 26,
    height: 26
  },
  noFriends: {
    textAlign: "center"
  },
  activeFriendRow: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: colors.appCyan,
    borderBottomColor: colors.appDivider,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  friendRow: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: colors.appDivider,
    borderBottomWidth: StyleSheet.hairlineWidth
  },

  challengeRow: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: colors.appDivider,
    borderBottomWidth: StyleSheet.hairlineWidth
  },

  textContainer: {
    flex: 1,
    flexDirection: "row",
    margin: 10
  },

  selected: {
    flex: 1,
    color: colors.appBlack,
    fontSize: 20,
    fontFamily: "HelveticaNeue-Light"
  },
  activeFriendName: {
    flex: 1,
    color: colors.appWhite,
    fontSize: 20,
    fontFamily: "HelveticaNeue-Light"
  },
  friendName: {
    flex: 1,
    color: colors.appBlack,
    fontSize: 20,
    fontFamily: "HelveticaNeue-Light"
  },
  name: {
    flex: 1,
    color: colors.appBlack,
    fontSize: 20,
    fontFamily: "HelveticaNeue-Light"
  },

  place: {
    flex: 1,
    color: colors.appBlack,
    fontSize: 20,
    fontFamily: "HelveticaNeue-Light",
    textAlign: "right"
  }
});
