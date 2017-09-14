import React, { StyleSheet } from "react-native";
import * as colors from "../../style/colors";
import { normalizePixels } from "../../style/normalizePixels";

module.exports = StyleSheet.create({
  friendScreen: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.appWhite,
    justifyContent: "center"
  },
  newChalName: {
    flex: 1,
    height: normalizePixels(40),
    borderColor: "gray",
    borderWidth: 1
  },

  newChalNameContainer: {
    flexDirection: "row"
  },
  backButton: {
    width: normalizePixels(25),
    height: normalizePixels(16),
    margin: normalizePixels(3),
    marginLeft: normalizePixels(6)
  },
  container: {
    flex: 1,
    padding: normalizePixels(10),
    flexDirection: "column",
    alignItems: "center",
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
    borderBottomColor: colors.appDivider,
    paddingLeft: normalizePixels(15)
  },
  createChallengeInputText: {
    flex: 1,
    fontSize: normalizePixels(15),
    fontFamily: "HelveticaNeue"
  },
  header: {
    backgroundColor: colors.appCyan
  },
  headerTitle: {
    color: colors.appWhite,
    fontSize: normalizePixels(20)
  },
  progressRow: {
    paddingBottom: normalizePixels(12),
    paddingTop: normalizePixels(10),
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.appDivider
  },
  progressContainer: {
    flex: 1,
    margin: normalizePixels(5)
  },
  listView: {
    padding: normalizePixels(12),
    backgroundColor: colors.appWhite,
    flexDirection: "column"
  },
  showListView: {
    paddingHorizontal: normalizePixels(12),
    backgroundColor: colors.appWhite,
    flexDirection: "column",
    alignItems: "flex-start"
  },
  welcome: {
    fontSize: normalizePixels(20),
    textAlign: "center",
    margin: normalizePixels(10)
  },
  listHeader: {
    margin: normalizePixels(10),
    fontSize: normalizePixels(15),
    fontFamily: "HelveticaNeue",
    marginRight: normalizePixels(40)
  },
  userPreview: {
    margin: normalizePixels(5),
    marginLeft: normalizePixels(30),
    fontSize: normalizePixels(15),
    fontFamily: "HelveticaNeue"
  },
  icon: {
    width: 26,
    height: 26
  },
  noFriends: {
    textAlign: "center",
    fontSize: normalizePixels(15),
    fontFamily: "HelveticaNeue"
  },
  activeFriendRow: {
    flexDirection: "row",
    paddingTop: normalizePixels(10),
    paddingBottom: normalizePixels(10),
    backgroundColor: colors.appCyan,
    borderBottomColor: colors.appDivider,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  friendRow: {
    flexDirection: "row",
    paddingTop: normalizePixels(10),
    paddingBottom: normalizePixels(10),
    borderBottomColor: colors.appDivider,
    borderBottomWidth: StyleSheet.hairlineWidth
  },

  challengeRow: {
    flexDirection: "row",
    borderBottomColor: colors.appDivider,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingTop: normalizePixels(5),
    paddingBottom: normalizePixels(5)
  },

  textContainer: {
    flex: 1,
    flexDirection: "row",
    margin: normalizePixels(5)
  },

  selected: {
    flex: 1,
    color: colors.appBlack,
    fontSize: normalizePixels(20),
    fontFamily: "HelveticaNeue-Light"
  },
  activeFriendName: {
    flex: 1,
    color: colors.appWhite,
    fontSize: normalizePixels(15),
    fontFamily: "HelveticaNeue-Light"
  },
  friendName: {
    flex: 1,
    color: colors.appBlack,
    fontSize: normalizePixels(15),
    fontFamily: "HelveticaNeue-Light"
  },
  name: {
    flex: 4,
    color: colors.appBlack,
    fontSize: normalizePixels(15),
    fontFamily: "HelveticaNeue",
    fontWeight: "bold"
  },

  place: {
    flex: 1,
    color: colors.appBlack,
    fontSize: normalizePixels(15),
    fontFamily: "HelveticaNeue",
    textAlign: "right"
  },

  userItemText: {
    fontSize: normalizePixels(15),
    textAlign: "left",
    fontFamily: "HelveticaNeue-Thin"
  }
});
