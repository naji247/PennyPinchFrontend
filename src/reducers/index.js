import { combineReducers } from "redux";
import { NavigationActions } from "react-navigation";
import * as types from "../actions/actionTypes";
import { AppNavigator } from "../navigators/AppNavigator";
import { MainNavigator } from "../navigators/MainNavigator";

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = NavigationActions.navigate({ routeName: "Login" });
const initialNavState = AppNavigator.router.getStateForAction(firstAction);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: "TransactionHistory" })
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
    case types.LOGIN_CANCEL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        isLoading: false
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
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

const initialHistoryState = {
  transactions: [],
  isLoading: false,
  isDirty: false
};
function hist(state = initialHistoryState, action) {
  switch (action.type) {
    case types.HISTORY_TRANSACTION_LOADING:
      return { ...state, isDirty: false, isLoading: true };
    case types.HISTORY_TRANSACTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isDirty: false,
        transactions: action.transactions
      };
    case types.HISTORY_TRANSACTION_FAILURE:
      return { ...state, isLoading: false, isDirty: false, transactions: [] };
    case types.SUBMIT_TRANSACTION_SUCCESS:
      return { ...state, isDirty: true, transactions: [] };
    default:
      return state;
  }
}

const initialChallengesState = {
  challenges: [],
  isLoading: false,
  isDirty: false // Except yo girl
};

function chal(state = initialChallengesState, action) {
  switch (action.type) {
    case types.CHALLENGES_LOADING:
      return {
        ...state,
        isLoading: true,
        isDirty: false
      };

    case types.CHALLENGES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        challenges: action.challenges
      };

    case types.SUBMIT_CHALLENGE_SUCCESS:
      return { ...state, isDirty: true, challenges: [] };

    default:
      return state;
  }
}

const initialCreateChallengeState = {
  challenge: {
    name: "",
    users: [],
    goal: "0",
    start_date: Date.now().toString(),
    end_date: Date.now().toString()
  },
  isLoading: false
};
function newChal(state = initialCreateChallengeState, action) {
  switch (action.type) {
    case types.SELECT_FRIEND:
      return {
        ...state,
        challenge: { ...state.challenge, users: action.selectedFriends }
      };

    case types.UPDATE_NEW_CHALLENGE:
      return {
        ...state,
        challenge: action.challenge
      };
    case types.SUBMIT_CHALLENGE_SUCCESS:
      return { ...state, isLoading: false };
    case types.SUBMIT_CHALLENGE_FAILURE:
      return { ...state, isLoading: false };
    case types.SUBMIT_CHALLENGE_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
}
const initialShowChallengeState = {
  challenge: null,
  isLoading: false
};
function showChal(state = initialShowChallengeState, action) {
  switch (action.type) {
    case types.CHALLENGE_SHOW_LOADING:
      return {
        ...state,
        isLoading: true
      };

    case types.CHALLENGE_SHOW_SUCCESS:
      return {
        ...state,
        challenge: action.challenge,
        isLoading: false
      };
    case types.CHALLENGE_SHOW_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}
const AppReducer = combineReducers({
  nav,
  auth,
  trans,
  hist,
  newChal,
  showChal,
  chal
});

export default AppReducer;
