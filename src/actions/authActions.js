import {
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  LOGIN_CANCEL
} from "./actionTypes";
import Expo from "expo";
const getFBToken = Expo.Facebook.logInWithReadPermissionsAsync;
const fbURL = "https://graph.facebook.com/";
const serverURL = "http://localhost:4000/";

const loginAction = user => {
  return {
    type: LOGIN_SUCCESS,
    user: user
  };
};

const loginFailureAction = err => {
  return {
    type: LOGIN_FAILURE,
    error: err
  };
};

const loginCancelAction = () => {
  return {
    type: LOGIN_CANCEL
  };
};

const loginLoadingAction = () => {
  return {
    type: LOGIN_LOADING
  };
};
const logoutAction = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

async function loginUser(user) {
  const headers = {
    fbtoken: user.token,
    fbid: user.id,
    "Content-Type": "application/json"
  };

  const body = {
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name
  };

  var config = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body)
  };

  const longTokenResponse = await fetch(`${serverURL}auth/login`, config);
  const longToken = (await longTokenResponse.json()).access_token;
  return longToken;
}

async function login(dispatch) {
  dispatch(loginLoadingAction());
  try {
    const { type, token } = await getFBToken("235578963603256", {
      permissions: ["public_profile", "email"]
    });
    if (type === "success") {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `${fbURL}me?access_token=${token}&fields=email,first_name,last_name`
      );
      const user = await response.json();
      user.token = token;
      user.token = await loginUser(user);
      dispatch(loginAction(user));
    } else if (type === "cancel") {
      dispatch(loginCancelAction());
    }
  } catch (err) {
    alert(err);
    dispatch(loginFailureAction(err));
  }
}

async function initializeAuth(user) {
  // Case 1: No prior logged in user
  if (!user) {
    return logoutAction();
  }
  const response = await fetch(
    `${fbURL}debug_token?input_token=${user.token}&access_token=${user.token}`
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
