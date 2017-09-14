import React, { StyleSheet } from "react-native";
import * as colors from "../../style/colors";
import { normalizePixels } from "../../style/normalizePixels";
module.exports = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },

  FBLoginButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    height: normalizePixels(50),
    marginHorizontal: normalizePixels(30),
    paddingLeft: normalizePixels(2),

    backgroundColor: "transparent",
    borderRadius: 3,
    borderWidth: 1,
    borderColor: colors.appWhite
  },
  FBLoginButtonText: {
    color: colors.appWhite,
    fontFamily: "HelveticaNeue",
    fontSize: normalizePixels(15)
  },
  FBLoginButtonTextLoggedIn: {
    marginLeft: normalizePixels(5)
  },
  FBLoginButtonTextLoggedOut: {
    marginLeft: normalizePixels(18)
  },
  FBLogo: {
    position: "absolute",
    height: normalizePixels(14),
    width: 14,
    left: 7,
    top: 7
  }
});
