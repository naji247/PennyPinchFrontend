import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { connect } from "react-redux";
import * as styles from "./HistoryScreen.css";
import { LoadingComponent } from "../UtilityComponents/LoadingComponents";
import { getHistory } from "../../actions/transactionActions";
import {
  TransactionAmountInput,
  TransactionTypeSelect,
  TransactionSubmit,
  TransactionDescriptionInput
} from "../CreateTransactions/CreateTransactions";

class HistoryScreen extends Component {
  constructor() {
    super();
  }

  navigationOptions = {
    title: "History"
  };

  componentDidMount() {
    const { user, getHistory } = this.props;
    getHistory(user);
  }

  render() {
    const { transactions, isLoading } = this.props.history;
    return isLoading
      ? <LoadingComponent size="large" />
      : <View style={styles.container}>
          <Text>
            {JSON.stringify(transactions)}
          </Text>
        </View>;
  }
}

const mapStateToProps = state => ({
  history: state.hist,
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  getHistory: user => {
    getHistory(dispatch, user);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoryScreen);
