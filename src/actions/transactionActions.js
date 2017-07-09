import * as types from "./actionTypes";
import * as api from "../helpers/api";

const updateTransactionAction = transaction => {
  return {
    type: types.UPDATE_TRANSACTION,
    transaction: transaction
  };
};

const submitTransactionLoading = () => {
  return { type: types.SUBMIT_TRANSACTION_LOADING };
};
const submitTransactionSuccess = () => {
  return { type: types.SUBMIT_TRANSACTION_SUCCESS };
};

const submitTransaction = (dispatch, user, transaction) => {
  dispatch(submitTransactionLoading());

  const headers = {
    fbtoken: user.token,
    fbid: user.id,
    "Content-Type": "application/json"
  };

  const finalAmount =
    (transaction.isSpending ? -1 : 1) * parseInt(transaction.amount);
  const body = {
    description: transaction.description,
    date: new Date().toISOString(),
    amount: finalAmount
  };
  var config = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body)
  };

  fetch(api.userHistoryUrl(user.id), config)
    .then(function(response) {
      return response.json();
    })
    .then(function(body) {
      if (body.error) throw body.error;
      dispatch(submitTransactionSuccess());
    })
    .catch(err => {
      alert(err);
    });
};

/*
  Here lies the actions related to gathering transaction histories.
*/

function historyLoadingAction() {
  return {
    type: types.HISTORY_TRANSACTION_LOADING
  };
}

function historySuccessAction(transactions) {
  return {
    type: types.HISTORY_TRANSACTION_SUCCESS,
    transactions: transactions
  };
}

function historyFailureAction() {
  return {
    type: types.HISTORY_TRANSACTION_FAILURE
  };
}

function getHistory(dispatch, user) {
  dispatch(historyLoadingAction());
  const headers = {
    fbtoken: user.token,
    fbid: user.id
  };
  fetch(api.userHistoryUrl(user.id), { headers: headers })
    .then(response => {
      return response.json();
    })
    .then(history => {
      if (history.error) throw history.error;
      dispatch(historySuccessAction(history));
    })
    .catch(err => {
      alert(err);
      dispatch(historyFailureAction());
    });
}

module.exports = {
  updateTransactionAction,
  submitTransaction,
  getHistory
};
