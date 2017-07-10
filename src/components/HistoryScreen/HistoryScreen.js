import React, { Component } from "react";
import { StyleSheet, Text, View, ListView } from "react-native";
import { connect } from "react-redux";
import * as styles from "./HistoryScreen.css";
import { LoadingComponent } from "../UtilityComponents/LoadingComponents";
import { getHistory } from "../../actions/transactionActions";
import moment from "moment";

class HistoryScreen extends Component {
  constructor() {
    super();
  }

  static navigationOptions = ({ navigation }) => ({
    title: "History"
  });

  componentDidMount() {
    const { user, getHistory } = this.props;
    getHistory(user);
  }

  render() {
    const { transactions, isLoading } = this.props.history;
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(transactions)
    };
    return isLoading
      ? <LoadingComponent size="large" />
      : <ListView
          contentContainerStyle={styles.container}
          dataSource={this.state.dataSource}
          renderRow={rowData => <TransactionRow rowData={rowData} />}
        />;
  }
}

const TransactionRow = ({ rowData }) =>
  <View style={styles.transactionRow}>
    <View style={styles.textContainer}>
      <Text style={styles.date}>
        {moment(rowData.date).format("M/D/YY")}
      </Text>
      <Text style={styles.description}>
        {rowData.description}
      </Text>
      <Text style={styles.amount}>
        {rowData.amount}
      </Text>
    </View>
  </View>;

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
