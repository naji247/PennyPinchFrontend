import * as types from "./actionTypes";
import * as api from "../helpers/api";
import { NavigationActions } from "react-navigation";
import _ from "lodash";

const selectFriendAction = selectedFriends => {
  return {
    type: types.SELECT_FRIEND,
    selectedFriends: selectedFriends
  };
};

const updateChallengeAction = challenge => {
  return {
    type: types.UPDATE_NEW_CHALLENGE,
    challenge: challenge
  };
};

function challengesLoadingAction() {
  return {
    type: types.CHALLENGES_LOADING
  };
}

function challengesSuccessAction(challenges) {
  return {
    type: types.CHALLENGES_SUCCESS,
    challenges: challenges
  };
}

function challengesFailureAction() {
  return {
    type: types.CHALLENGES_FAILURE
  };
}

function getChallenges(dispatch, user) {
  dispatch(challengesLoadingAction());
  const headers = {
    fbtoken: user.token,
    fbid: user.id
  };

  fetch(api.userActiveChallengesUrl(user.id), { headers: headers })
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.error) throw data.error;
      dispatch(challengesSuccessAction(data));
    })
    .catch(err => {
      alert(err);
      dispatch(challengesFailureAction());
    });
}

function submitChallengeLoading() {
  return { type: types.SUBMIT_CHALLENGE_LOADING };
}
function submitChallengeSuccess() {
  return { type: types.SUBMIT_CHALLENGE_SUCCESS };
}
function submitChallengeFailure() {
  return { type: types.SUBMIT_CHALLENGE_FAILURE };
}

const submitChallenge = (dispatch, user, challenge, navigation) => {
  dispatch(submitChallengeLoading());

  const headers = {
    fbtoken: user.token,
    fbid: user.id,
    "Content-Type": "application/json"
  };

  const participants = _.map(challenge.users, user => {
    return user.id;
  });

  const body = {
    name: challenge.name,
    start_date: new Date(challenge.start_date).toISOString(),
    end_date: new Date(challenge.end_date).toISOString(),
    goal: parseInt(challenge.goal),
    challenge_type: "sprint",
    fbids: participants.concat(user.id)
  };

  var config = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body)
  };

  fetch(api.createChallengeUrl(), config)
    .then(function(response) {
      return response.json();
    })
    .then(function(body) {
      if (body.error) throw body.error;
      dispatch(submitChallengeSuccess());
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "ChallengesScreen" })]
      });
      navigation.dispatch(resetAction);
    })
    .catch(err => {
      dispatch(submitChallengeFailure());
      alert(err);
    });
};

function challengeShowLoading() {
  return {
    type: types.CHALLENGE_SHOW_LOADING
  };
}

function challengeShowSuccess(challenge) {
  return {
    type: types.CHALLENGE_SHOW_SUCCESS,
    challenge: challenge
  };
}

function challengeShowFailure() {
  return {
    type: types.CHALLENGE_SHOW_FAILURE
  };
}

function showChallenge(dispatch, challenge, user) {
  dispatch(challengeShowLoading());
  const headers = {
    fbtoken: user.token,
    fbid: user.id
  };
  fetch(api.showChallengeUrl(challenge.challenge_id), { headers: headers })
    .then(function(response) {
      return response.json();
    })
    .then(function(body) {
      if (body.error) throw body.error;
      dispatch(challengeShowSuccess(body));
    })
    .catch(err => {
      alert(err);
      dispatch(challengeShowFailure());
    });
}

module.exports = {
  selectFriendAction,
  updateChallengeAction,
  showChallenge,
  getChallenges,
  submitChallenge
};
