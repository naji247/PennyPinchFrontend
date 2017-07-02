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

const initialAuthState = { isLoggedIn: false, user: null, isLoading: false };

function auth(state = initialAuthState, action) {
  switch (action.type) {
    case types.LOGIN_LOADING:
      return { ...state, isLoading: true };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.user,
        isLoading: false
      };
    case types.LOGOUT_SUCCESS:
      return { ...state, isLoggedIn: false, user: null, isLoading: false };
    default:
      return state;
  }
}

const initialTransactionState = {
  transaction: {
    amount: "10",
    isSpending: true,
    isLoading: false,
    description: "pizza"
  }
};

function trans(state = initialTransactionState, action) {
  switch (action.type) {
    case types.UPDATE_TRANSACTION:
      return { ...state, transaction: action.transaction };
    case types.SUBMIT_TRANSACTION_LOADING:
      return {
        ...state,
        transaction: { ...state.transaction, isLoading: true }
      };
    case types.SUBMIT_TRANSACTION_SUCCESS:
      return {
        ...state,
        transaction: { ...state.transaction, isLoading: false }
      };
    default:
      return state;
  }
}

const AppReducer = combineReducers({
  nav,
  auth,
  trans
});

export default AppReducer;
