import React, { Component } from "react";
import { StyleSheet, Text, View, ListView, Button } from "react-native";
import { connect } from "react-redux";
import * as styles from "./ChallengesScreen.css";
import { LoadingComponent } from "../UtilityComponents/LoadingComponents";
import { getChallenges } from "../../actions/challengeActions";
import moment from "moment";

class ChallengesScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Challenges",
      headerRight: (
        <Button
          title="+"
          onPress={() => navigation.navigate("AddFriendsScreen")}
        />
      )
    };
  };

  componentDidMount() {
    const { user, nav, getChallenges } = this.props;

    getChallenges(user);
  }

  componentWillUpdate(nextProps, nextState) {
    // return a boolean value
    const { user, nav, isDirty, isLoading, getChallenges } = this.props;
    if (isDirty && !isLoading) {
      getChallenges(user);
    }
    return true;
  }

  render() {
    const { navigate } = this.props.navigation;
    const { isLoading, challenges } = this.props;
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    return isLoading
      ? <LoadingComponent size="large" />
      : <ListView
          contentContainerStyle={styles.listView}
          dataSource={ds.cloneWithRows(challenges)}
          renderRow={rowData => <ChallengeRow rowData={rowData} />}
          pageSize={50}
          initialListSize={50}
          enableEmptySections={true}
        />;
  }
}

const ChallengeRow = ({ rowData }) =>
  <View style={styles.challengeRow}>
    <View style={styles.textContainer}>
      <Text style={styles.date}>
        {rowData.name}
      </Text>
      <Text style={styles.date}>
        {rowData.users.length}{" "}
        {rowData.users.length == 1 ? "Competitor" : "Competitors"}
      </Text>
    </View>
  </View>;

const mapStateToProps = state => ({
  user: state.auth.user,
  nav: state.nav,
  ...state.chal
});

const mapDispatchToProps = dispatch => ({
  getChallenges: user => {
    getChallenges(dispatch, user);
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(ChallengesScreen);
