import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Button,
  TouchableHighlight
} from "react-native";
import { connect } from "react-redux";
import * as styles from "./ChallengesScreen.css";
import { LoadingComponent } from "../UtilityComponents/LoadingComponents";
import { getChallenges, showChallenge } from "../../actions/challengeActions";
import moment from "moment";

class ChallengesScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Challenges",
      headerLeft: (
        <Button title="Me" onPress={() => navigation.navigate("Settings")} />
      ),
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
    const { isLoading, user, challenges, challengeSelect } = this.props;
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    return isLoading
      ? <LoadingComponent size="large" />
      : <ListView
          contentContainerStyle={styles.listView}
          dataSource={ds.cloneWithRows(challenges)}
          renderRow={rowData =>
            <ChallengeRow
              challenge={rowData}
              challengeSelect={challengeSelect}
              user={user}
              navigate={navigate}
            />}
          pageSize={50}
          initialListSize={50}
          enableEmptySections={true}
        />;
  }
}

class ChallengeRow extends Component {
  handleChallengeClick() {
    const { challenge, challengeSelect, navigate, user } = this.props;
    navigate("ChallengeShowScreen", { name: challenge.name });
    challengeSelect(challenge, user);
  }

  render() {
    const { challenge } = this.props;
    return (
      <TouchableHighlight
        onPress={() => this.handleChallengeClick()}
        style={styles.challengeRow}
      >
        <View style={styles.textContainer}>
          <Text style={styles.date}>
            {challenge.name}
          </Text>
          <Text style={styles.date}>
            {challenge.users.length}{" "}
            {challenge.users.length == 1 ? "Competitor" : "Competitors"}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  nav: state.nav,
  ...state.chal
});

const mapDispatchToProps = dispatch => ({
  getChallenges: user => {
    getChallenges(dispatch, user);
  },
  challengeSelect: (challenge, user) => {
    showChallenge(dispatch, challenge, user);
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(ChallengesScreen);
