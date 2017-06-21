import { combineReducers } from "redux";
import { NavigationActions } from "react-navigation";
import * as types from "../actions/actionTypes";
import { AppNavigator } from "../navigators/AppNavigator";

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams("Login");
const initialNavState = AppNavigator.router.getStateForAction(firstAction);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      nextState = AppNavigator.router.getStateForAction(
        AppNavigator.router.getActionForPathAndParams("Main")
      );
      break;
    case types.LOGOUT_SUCCESS:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: "Login" })
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

const initialAuthState = { isLoggedIn: false, user: null };

function auth(state = initialAuthState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true, user: action.user };
    case types.LOGOUT_SUCCESS:
      return { ...state, isLoggedIn: false, user: null };
    default:
      return state;
  }
}

const AppReducer = combineReducers({
  nav,
  auth
});

export default AppReducer;
