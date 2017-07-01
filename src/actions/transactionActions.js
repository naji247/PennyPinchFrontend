import * as types from "./actionTypes";
const server = "http://localhost:4000/";
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

  fetch(`${server}users/${user.id}/transactions`, config)
    .then(function(response) {
      return response.json();
    })
    .then(function(body) {
      if (body.error) {
        alert(body.error);
      }
      dispatch(submitTransactionSuccess());
    })
    .catch(err => {
      alert(err);
    });
};

module.exports = {
  updateTransactionAction,
  submitTransaction
};
