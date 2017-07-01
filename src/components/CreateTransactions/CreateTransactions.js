import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { connect } from "react-redux";
import * as styles from "./CreateTransactions.css";
import { updateTransactionAction } from "../../actions/transactionActions";

const TransactionAmountInput = ({ transaction, updateTransaction }) =>
  <View style={styles.container}>
    <Text>Amount:</Text>
    <TextInput
      style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
      onChangeText={amount =>
        updateTransaction({ ...transaction, amount: amount })}
      keyboardType="numeric"
      value={transaction.amount}
    />
  </View>;

const TransactionDescriptionInput = ({ transaction, updateTransaction }) =>
  <View style={styles.container}>
    <Text>Description:</Text>
    <TextInput
      style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
      onChangeText={desc =>
        updateTransaction({ ...transaction, description: desc })}
      keyboardType="numeric"
      value={transaction.description}
    />
  </View>;

const TransactionTypeSelect = ({ transaction, updateTransaction }) =>
  <View style={styles.selectTypeContainer}>
    <Button
      onPress={() => updateTransaction({ ...transaction, isSpending: true })}
      title={"Spent"}
      disabled={transaction.isSpending}
    />
    <Button
      onPress={() => updateTransaction({ ...transaction, isSpending: false })}
      title="Saved"
      disabled={!transaction.isSpending}
    />
  </View>;

const TransactionSubmit = ({ transaction, user, submitTransaction }) =>
  <View style={styles.selectTypeContainer}>
    <Button
      onPress={() => submitTransaction(user, transaction)}
      title={"Save!"}
    />
  </View>;

module.exports = {
  TransactionAmountInput,
  TransactionTypeSelect,
  TransactionSubmit,
  TransactionDescriptionInput
};
