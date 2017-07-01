import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { connect } from "react-redux";
import * as styles from "./NewTransactionScreen.css";
import {
  updateTransactionAction,
  submitTransaction
} from "../../actions/transactionActions";
import {
  TransactionAmountInput,
  TransactionTypeSelect,
  TransactionSubmit,
  TransactionDescriptionInput
} from "../CreateTransactions/CreateTransactions";

const NewTransactionScreen = ({
  transaction,
  user,
  updateTransaction,
  submitTransaction
}) => {
  return transaction.isLoading
    ? <Text>Loading</Text>
    : <View style={styles.container}>
        <TransactionAmountInput
          transaction={transaction}
          updateTransaction={updateTransaction}
        />
        <TransactionDescriptionInput
          transaction={transaction}
          updateTransaction={updateTransaction}
        />
        <TransactionTypeSelect
          transaction={transaction}
          updateTransaction={updateTransaction}
        />
        <TransactionSubmit
          transaction={transaction}
          user={user}
          submitTransaction={submitTransaction}
        />
      </View>;
};

NewTransactionScreen.navigationOptions = {
  title: "Add Transaction"
};

const mapStateToProps = state => ({
  transaction: state.trans.transaction,
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  updateTransaction: transaction => {
    dispatch(updateTransactionAction(transaction));
  },
  submitTransaction: async (user, transaction) => {
    submitTransaction(dispatch, user, transaction);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  NewTransactionScreen
);
