import React, { Component } from "react";
import {
  Button,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
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
import { normalizePixels } from "../../style/normalizePixels";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { logout } from "../../actions/authActions";
import { LogoutButton } from "../UtilityComponents/LogoutButton";

class NewTransactionScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Add Transaction",
      tabBarIcon: ({ tintColor }) => (
        <Image source={require("./plus-06.png")} style={styles.icon} />
      ),
      headerStyle: styles.header,
      headerTitleStyle: styles.headerTitle,
      headerLeft: <LogoutButton navigation={navigation} />
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

    return transaction.isLoading ? (
      <LoadingComponent size="large" />
    ) : (
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
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
      </KeyboardAwareScrollView>
    );
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
