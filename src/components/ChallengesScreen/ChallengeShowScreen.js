import React, { Component } from "react";
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  ListView,
  Button
} from "react-native";
import { connect } from "react-redux";
import * as styles from "./ChallengesScreen.css";
import { LoadingComponent } from "../UtilityComponents/LoadingComponents";
import { selectFriendAction } from "../../actions/challengeActions";
import { Bar } from "react-native-progress";
import moment from "moment";

class ChallengeShowScreen extends Component {
  constructor() {
    super();
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name
  });

  componentDidMount() {}

  render() {
    const { isLoading, challenge } = this.props;
    const rowSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    return isLoading
      ? <LoadingComponent size="large" />
      : <ListView
          contentContainerStyle={styles.listView}
          dataSource={rowSource.cloneWithRows(challenge.participants)}
          renderRow={(rowData, sectionID, rowID) =>
            <ProgessRow
              userProgress={rowData}
              rank={rowID}
              challenge={challenge}
            />}
          pageSize={50}
          initialListSize={50}
          enableEmptySections={true}
        />;
  }
}

class ProgessRow extends Component {
  render() {
    const { userProgress, challenge } = this.props;
    const progress = parseInt(userProgress.spent) / parseInt(challenge.goal);
    console.log(this.props);
    return (
      <View style={styles.progressRow}>
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>
            {`${userProgress.first_name} ${userProgress.last_name}`}
          </Text>
          <Bar
            progress={progress}
            color={"aliceblue"}
            unfilledColor={"#007aff"}
            height={8}
            borderColor="#007aff"
            width={null}
          />
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
