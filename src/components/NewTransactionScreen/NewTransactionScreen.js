import React, { Component } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import { connect } from "react-redux";
import * as styles from "./NewTransactionScreen.css";
import { LoadingComponent } from "../UtilityComponents/LoadingComponents";
import * as settingButton from "../UtilityComponents/SettingButtonStyle.css";
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
import * as colors from "../../style/colors";

class NewTransactionScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Add Transaction",
      headerStyle: styles.header,
      headerTitleStyle: styles.headerTitle,
      headerLeft: (
        <Button
          color={colors.appWhite}
          title="Me"
          onPress={() => navigation.navigate("Settings")}
        />
      )
    };
  };

  render() {
    const {
      transaction,
      user,
      updateTransaction,
      submitTransaction,
      navigate,
      navigation
    } = this.props;

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
          <TransactionSubmit
            transaction={transaction}
            user={user}
            submitTransaction={submitTransaction}
            navigation={navigation}
          />
        </View>;
  }
}

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
