import React, { StyleSheet } from "react-native";
import * as colors from "../../style/colors";

module.exports = StyleSheet.create({
  friendScreen: {
    flex: 1,
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
  backButton: {
    width: 25,
    height: 16,
    margin: 3,
    marginLeft: 6
  },
  container: {
    flex: 1,
    padding: 10,
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: colors.appWhite
  },
  createChallengeContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: colors.appWhite
  },
  createChallengeInput: {
    flex: 1,
    justifyContent: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.appDivider
  },
  header: {
    backgroundColor: colors.appCyan
  },
  headerTitle: {
    color: colors.appWhite
  },
  progressRow: {
    paddingBottom: 12,
    paddingTop: 10,
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.appDivider
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
  showListView: {
    paddingHorizontal: 12,
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
    fontSize: 15,
    fontFamily: "HelveticaNeue",
    marginRight: 40
  },
  userPreview: {
    margin: 5,
    marginLeft: 20,
    fontSize: 15,
    fontFamily: "HelveticaNeue"
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
    borderBottomColor: colors.appDivider,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingTop: 5,
    paddingBottom: 5
  },

  textContainer: {
    flex: 1,
    flexDirection: "row",
    margin: 5
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
    flex: 4,
    color: colors.appBlack,
    fontSize: 15,
    fontFamily: "HelveticaNeue",
    fontWeight: "bold"
  },

  place: {
    flex: 1,
    color: colors.appBlack,
    fontSize: 13,
    fontFamily: "HelveticaNeue",
    textAlign: "right"
  },

  userItemText: {
    textAlign: "left",
    fontFamily: "HelveticaNeue-Thin"
  }
});
