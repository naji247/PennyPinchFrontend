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
    const { user, getHistory, nav } = this.props;
    getHistory(user);
  }

  componentWillUpdate(nextProps, nextState) {
    // return a boolean value
    const { user, history, getHistory, nav } = this.props;
    if (history.isDirty && !history.isLoading) {
      getHistory(user);
    }
  }

  render() {
    const { transactions, isLoading } = this.props.history;
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    return isLoading
      ? <LoadingComponent size="large" />
      : <ListView
          contentContainerStyle={styles.container}
          dataSource={ds.cloneWithRows(transactions)}
          renderRow={rowData => <TransactionRow rowData={rowData} />}
          pageSize={50}
          initialListSize={50}
          enableEmptySections={true}
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
  user: state.auth.user,
  nav: state.nav
});

const mapDispatchToProps = dispatch => ({
  getHistory: user => {
    getHistory(dispatch, user);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoryScreen);
