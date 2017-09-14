import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  Button
} from "react-native";
import _ from "lodash";
import { connect } from "react-redux";
import * as styles from "./ChallengesScreen.css";
import { LoadingComponent } from "../UtilityComponents/LoadingComponents";
import { selectFriendAction } from "../../actions/challengeActions";
import { Bar } from "react-native-progress";
import moment from "moment";
import * as colors from "../../style/colors";
import { normalizePixels } from "../../style/normalizePixels";

class ChallengeShowScreen extends Component {
  constructor() {
    super();
  }

  static navigationOptions = ({ navigation }) => ({
    title: "Challenge Details", //navigation.state.params.name,
    tabBarIcon: ({ tintColor }) => (
      <Image source={require("./trophy-05.png")} style={styles.icon} />
    ),
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
    headerLeft: (
      <TouchableHighlight
        onPress={() => navigation.dispatch(NavigationActions.back(null))}
        underlayColor={colors.appCyan}
      >
        <Image
          style={styles.backButton}
          source={require("./backbutton-11.png")}
        />
      </TouchableHighlight>
    )
  });

  componentDidMount() {}

  render() {
    const { isLoading, challenge } = this.props;
    return isLoading ? (
      <LoadingComponent size="large" />
    ) : (
      <LeaderBoard challenge={challenge} />
    );
  }
}

class LeaderBoard extends Component {
  render() {
    const { challenge } = this.props;
    const rowSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    endDate = moment(challenge.end_date);
    return (
      <View style={{ backgroundColor: colors.appWhite, flex: 1 }}>
        <View>
          <Text
            style={{
              marginVertical: normalizePixels(10),
              fontSize: normalizePixels(20),
              textAlign: "center",
              fontWeight: "bold",
              fontFamily: "HelveticaNeue"
            }}
          >
            {challenge.name}
          </Text>

          <Text
            style={{
              marginBottom: normalizePixels(10),
              textAlign: "center",
              fontFamily: "HelveticaNeue",
              fontSize: normalizePixels(15)
            }}
          >
            {_.capitalize(endDate.fromNow(true))} left
          </Text>
          <Text
            style={{
              marginBottom: normalizePixels(20),
              textAlign: "center",
              fontFamily: "HelveticaNeue",
              fontSize: normalizePixels(15)
            }}
          >
            Goal: ${challenge.goal}
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: colors.appDivider,
            borderBottomWidth: StyleSheet.hairlineWidth
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "HelveticaNeue",
              fontWeight: "bold",
              fontSize: normalizePixels(20),
              marginBottom: normalizePixels(5)
            }}
          >
            Leader Board
          </Text>
        </View>
        <ListView
          contentContainerStyle={styles.showListView}
          dataSource={rowSource.cloneWithRows(challenge.participants)}
          renderRow={(rowData, sectionID, rowID) => (
            <ProgessRow
              userProgress={rowData}
              rank={rowID}
              challenge={challenge}
            />
          )}
          pageSize={50}
          initialListSize={50}
          enableEmptySections={true}
        />
      </View>
    );
  }
}

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

class ProgessRow extends Component {
  render() {
    const { userProgress, challenge } = this.props;

    const spent = parseInt(userProgress.spent);
    const goal = parseInt(challenge.goal);
    const progress = spent / goal;
    const isNegative = spent > goal;
    const userPlace = getUserPlace(userProgress, challenge.participants);
    return (
      <View style={styles.progressRow}>
        <View style={styles.progressContainer}>
          <View
            style={{
              marginBottom: normalizePixels(10),
              flexDirection: "row",
              marginVertical: normalizePixels(5)
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                flex: 1,
                fontFamily: "HelveticaNeue",
                fontSize: normalizePixels(15)
              }}
            >
              {userPlace}
            </Text>
            <Text
              style={{
                flex: 7,
                fontFamily: "HelveticaNeue",
                fontSize: normalizePixels(15)
              }}
            >
              {`${userProgress.first_name} ${userProgress.last_name}`}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 5 }}>
              <Bar
                progress={progress}
                color={colors.appWhite}
                unfilledColor={colors.appCyan}
                height={normalizePixels(8)}
                borderColor={colors.appCyan}
                borderWidth={normalizePixels(3)}
                borderRadius={normalizePixels(15)}
                width={null}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  textAlign: "right",
                  fontFamily: "HelveticaNeue",
                  fontSize: normalizePixels(15)
                }}
              >
                {isNegative ? "-" : null}${Math.abs(goal - spent)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

function isOverLimit(goal, spent) {
  return goal > spent;
}

const renderProgress = (user, challenge) => {};

const mapStateToProps = state => ({
  ...state.showChal
});

const mapDispatchToProps = dispatch => ({
  selectFriend: selectedFriends => {
    dispatch(selectFriendAction(selectedFriends));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ChallengeShowScreen
);
