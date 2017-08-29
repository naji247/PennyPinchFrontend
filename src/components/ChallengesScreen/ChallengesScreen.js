import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Button,
  Image,
  TouchableHighlight
} from "react-native";
import { connect } from "react-redux";
import * as styles from "./ChallengesScreen.css";
import { LoadingComponent } from "../UtilityComponents/LoadingComponents";
import { getChallenges, showChallenge } from "../../actions/challengeActions";
import moment from "moment";
import _ from "lodash";
import * as colors from "../../style/colors";

function getOrdinal(n) {
  var s = ["th", "st", "nd", "rd"],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function getUserPlace(user, userRankings) {
  if (user) {
    var index = _.findIndex(userRankings, function(o) {
      return o.fbid == user.id || o.fbid == user.fbid;
    });
    return getOrdinal(index + 1);
  }
}

class ChallengesScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Challenges",
      tabBarIcon: ({ tintColor }) =>
        <Image source={require("./trophy-05.png")} style={styles.icon} />,
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
      : <View style={styles.container}>
          <TouchableHighlight
            style={{
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: colors.appGreen,
              marginHorizontal: 30
            }}
            underlayColor={colors.appTransparentGreen}
            onPress={() => navigate("AddFriendsScreen")}
          >
            <Text
              style={{
                flex: 1,
                textAlign: "center",
                color: colors.appWhite,
                padding: 10
              }}
            >
              Add a Challenge
            </Text>
          </TouchableHighlight>
          <ListView
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
            renderHeader={() =>
              <View
                style={{
                  borderBottomColor: colors.appDivider,
                  borderBottomWidth: StyleSheet.hairlineWidth
                }}
              >
                <Text style={styles.listHeader}>
                  These are your current active challenges. Tap a challenge to
                  see your progress!
                </Text>
              </View>}
          />
        </View>;
  }
}

class ChallengeRow extends Component {
  handleChallengeClick() {
    const { challenge, challengeSelect, navigate, user } = this.props;
    navigate("ChallengeShowScreen", { name: challenge.name });
    challengeSelect(challenge, user);
  }

  render() {
    const { user, challenge } = this.props;
    const numOfUsersToPreview =
      challenge.users.length >= 3 ? 3 : challenge.users.length;
    const usersToShow = challenge.users.slice(0, numOfUsersToPreview - 1);
    return (
      <TouchableHighlight
        onPress={() => this.handleChallengeClick()}
        style={styles.challengeRow}
        underlayColor={colors.appTransparentCyan}
      >
        <View style={{ flex: 1 }}>
          <View style={styles.textContainer}>
            <Text style={styles.name}>
              {challenge.name}
            </Text>
            <Text style={styles.place}>
              {getUserPlace(user, challenge.users)} of {challenge.users.length}
            </Text>
          </View>
          {usersToShow.map(function(usr, i) {
            return (
              <UserPlaceItem
                user={usr}
                currentUser={user}
                tryme={usersToShow}
                key={i}
              />
            );
          })}
          <UserPlaceItem
            user={challenge.users[numOfUsersToPreview - 1]}
            currentUser={user}
            tryme={challenge.users}
            showTimeLeft={moment(challenge.end_date)}
          />
        </View>
      </TouchableHighlight>
    );
  }
}

class UserPlaceItem extends Component {
  render() {
    const { user, tryme, currentUser, showTimeLeft } = this.props;
    if (user != null && currentUser != null) {
      const nameToShow = currentUser.id == user.fbid ? "You" : user.first_name;
      return (
        <View style={styles.textContainer}>
          <Text style={styles.userItemText}>
            {getUserPlace(user, tryme)}: {nameToShow}
          </Text>
          {showTimeLeft
            ? <Text style={styles.place}>
                {_.capitalize(showTimeLeft.fromNow(true))} left
              </Text>
            : null}
        </View>
      );
    } else {
      return null;
    }
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
