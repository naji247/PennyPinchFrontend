import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actionTypes";
import Expo from "expo";
const getFBToken = Expo.Facebook.logInWithReadPermissionsAsync;

const loginAction = user => {
  return {
    type: LOGIN_SUCCESS,
    user: user
  };
};

const logoutAction = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

async function login() {
  const { type, token } = await getFBToken("235578963603256", {
    permissions: ["public_profile"]
  });
  if (type === "success") {
    // Get the user's name using Facebook's Graph API
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}`
    );
    user = await response.json();
    user.token = token;
    return loginAction(user);
  }
}

async function initializeAuth(user) {
  // Case 1: No prior logged in user
  if (!user) {
    return logoutAction();
  }
  const response = await fetch(
    `https://graph.facebook.com/debug_token?input_token=${user.token}&access_token=${user.token}`
  );
  tokenInfo = await response.json();

  // Case 2: Prior user data exists, but is outdated
  if (!tokenInfo || !tokenInfo.data || !tokenInfo.data.is_valid) {
    return logoutAction();
  }
  // Case 3: Prior user data exists, and is valid
  return loginAction(user);
}

function logout() {
  return logoutAction();
}

module.exports = {
  login,
  loginAction,
  logout,
  initializeAuth
};
