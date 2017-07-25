import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { connect } from "react-redux";
import * as styles from "./NewTransactionScreen.css";
import { LoadingComponent } from "../UtilityComponents/LoadingComponents";
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
  submitTransaction,
  navigation
}) => {
  return transaction.isLoading
    ? <LoadingComponent size="large" />
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
          navigation={navigation}
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
  submitTransaction: async (user, transaction, navigation) => {
    submitTransaction(dispatch, user, transaction, navigation);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  NewTransactionScreen
);
