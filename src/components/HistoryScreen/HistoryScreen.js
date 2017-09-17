import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ListView, Button } from "react-native";
import { connect } from "react-redux";
import * as styles from "./HistoryScreen.css";
import { LoadingComponent } from "../UtilityComponents/LoadingComponents";
import { LogoutButton } from "../UtilityComponents/LogoutButton";
import { getHistory } from "../../actions/transactionActions";
import moment from "moment";
import * as colors from "../../style/colors";
import { normalizePixels } from "../../style/normalizePixels";
import { logout } from "../../actions/authActions";

const EmptyHistory = ({ hello }) => (
  <View style={styles.emptyContainer}>
    <Text style={styles.emptyText}>You haven't spent any money yet!</Text>
    <Text style={styles.emptyText}>
      Challenge your friends to save money and help motivate low spending. You
      can make new challenges by selecting "Challenges".
    </Text>
    <Text style={styles.emptyText}>
      Track your spending easily by selecting "Add Transaction".
    </Text>
  </View>
);

class HistoryScreen extends Component {
  constructor() {
    super();
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "History",
      tabBarIcon: ({ tintColor }) => (
        <Image source={require("./openbook-09.png")} style={styles.icon} />
      ),
      headerStyle: styles.header,
      headerTitleStyle: styles.headerTitle,
      headerLeft: <LogoutButton navigation={navigation} />
    };
  };

  componentDidMount() {
    const { user, getHistory, nav } = this.props;
    console.log("mounted");
    getHistory(user);
  }

  componentWillUpdate(nextProps, nextState) {
    // return a boolean value
    const { user, isDirty, isLoading, getHistory, nav } = this.props;
    if (isDirty && !isLoading) {
      getHistory(user);
    }
    console.log("updating");
    return true;
  }

  render() {
    const { transactions, isLoading } = this.props;
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    return isLoading ? (
      <LoadingComponent size="large" />
    ) : (
      <View style={styles.container}>
        {transactions.length == 0 ? (
          <EmptyHistory />
        ) : (
          <ListView
            contentContainerStyle={styles.listView}
            dataSource={ds.cloneWithRows(transactions)}
            renderRow={rowData => <TransactionRow rowData={rowData} />}
            pageSize={50}
            initialListSize={50}
            enableEmptySections={true}
            removeClippedSubviews={false}
            renderHeader={() => (
              <View
                style={{
                  flexDirection: "row",
                  borderBottomColor: colors.appDivider,
                  borderBottomWidth: StyleSheet.hairlineWidth
                }}
              >
                <Text style={styles.listHeader}>
                  How you spent money in the past several days...
                </Text>
              </View>
            )}
          />
        )}
      </View>
    );
  }
}

const TransactionRow = ({ rowData }) => (
  <View style={styles.transactionRow}>
    <View style={{ flex: 1, flexDirection: "column" }}>
      <Text style={styles.date}>{moment(rowData.date).format("M/D/YY")}</Text>
      <View style={styles.textContainer}>
        <Text style={styles.description}>{rowData.description}</Text>
        <Text style={styles.amount}>
          ${(-1 * parseFloat(rowData.amount)).toFixed(2)}
        </Text>
      </View>
    </View>
  </View>
);
const mapStateToProps = state => ({
  user: state.auth.user,
  nav: state.nav,
  ...state.hist
});

const mapDispatchToProps = dispatch => ({
  getHistory: user => {
    getHistory(dispatch, user);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoryScreen);
