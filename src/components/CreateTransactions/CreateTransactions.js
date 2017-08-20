import React from "react";
import * as colors from "../../style/colors";
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from "react-native";
import { connect } from "react-redux";
import * as styles from "./CreateTransactions.css";
import { updateTransactionAction } from "../../actions/transactionActions";

const TransactionAmountInput = ({ transaction, updateTransaction }) =>
  <View style={styles.amountContainer}>
    <TextInput
      style={styles.amountInput}
      placeholder="Amount..."
      onChangeText={amount =>
        updateTransaction({ ...transaction, amount: amount })}
      keyboardType="numeric"
      value={transaction.amount}
      placeholderTextColor={colors.appDarkgrey}
    />
  </View>;

const TransactionDescriptionInput = ({ transaction, updateTransaction }) =>
  <View style={styles.descriptionContainer}>
    <TextInput
      placeholder="Description..."
      style={styles.descriptionInput}
      onChangeText={desc =>
        updateTransaction({ ...transaction, description: desc })}
      value={transaction.description}
      placeholderTextColor={colors.appDarkgrey}
      multiline={true}
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
      title="Spent!"
      disabled={!transaction.isSpending}
    />
  </View>;

const TransactionSubmit = ({
  transaction,
  user,
  submitTransaction,
  navigation
}) =>
  <TouchableHighlight
    style={styles.selectTypeContainer}
    onPress={() => submitTransaction(user, transaction, navigation)}
    underlayColor={colors.appCyan}
  >
    <View style={styles.submitButton}>
      <Text style={styles.submitButtonText}>Submit!</Text>
    </View>
  </TouchableHighlight>;

module.exports = {
  TransactionAmountInput,
  TransactionTypeSelect,
  TransactionSubmit,
  TransactionDescriptionInput
};
