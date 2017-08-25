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
      return o.fbid == user.id;
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
      ),
      headerRight: (
        <Button
          title="+"
          color={colors.appWhite}
          style={{ margin: 5 }}
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
      : <View style={styles.container}>
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
    return (
      <TouchableHighlight
        onPress={() => this.handleChallengeClick()}
        style={styles.challengeRow}
        underlayColor={colors.appTransparentCyan}
      >
        <View style={styles.textContainer}>
          <Text style={styles.name}>
            {challenge.name}
          </Text>
          <Text style={styles.place}>
            {getUserPlace(user, challenge.users)} Place
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
