import React, { Component } from "react";
import {
  TextInput,
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
import {
  updateChallengeAction,
  submitChallenge
} from "../../actions/challengeActions";
import moment from "moment";

class CreateChallengeScreen extends Component {
  constructor() {
    super();
  }

  static navigationOptions = ({ navigation }) => ({
    title: "Pick Challenge"
  });

  componentDidMount() {
    const { nav } = this.props;
  }

  render() {
    const navigation = this.props.navigation;
    const {
      isLoading,
      challenge,
      updateChallenge,
      user,
      submitChallenge
    } = this.props;
    console.log(this.props);
    return isLoading
      ? <LoadingComponent size="large" />
      : <View style={styles.container}>
          <ChallengeNameInput {...this.props} />
          <ChallengeGoalInput {...this.props} />
          <ChallengeDateInput field="start_date" {...this.props} />
          <ChallengeDateInput field="end_date" {...this.props} />
          <Button
            title="Send!"
            onPress={() => submitChallenge(user, challenge, navigation)}
          />
        </View>;
  }
}

const ChallengeNameInput = ({ challenge, updateChallenge }) =>
  <View style={styles.container}>
    <Text>Name:</Text>
    <TextInput
      style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
      onChangeText={name => updateChallenge({ ...challenge, name: name })}
      value={challenge.name}
    />
  </View>;

const ChallengeGoalInput = ({ challenge, updateChallenge }) =>
  <View style={styles.container}>
    <Text>Goal:</Text>
    <TextInput
      style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
      onChangeText={goal => updateChallenge({ ...challenge, goal: goal })}
      keyboardType="numeric"
      value={challenge.goal}
    />
  </View>;

class ChallengeDateInput extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { nav } = this.props;
  }

  validStyle(date) {
    var wrongStyle = {
      height: 40,
      borderColor: "gray",
      borderWidth: 1,
      backgroundColor: "red"
    };
    var rightStyle = {
      height: 40,
      borderColor: "gray",
      borderWidth: 1
    };
    return moment(date).isValid() ? rightStyle : wrongStyle;
  }

  render() {
    const { challenge, updateChallenge, field } = this.props;
    var isStart = field == "start_date";
    var date = isStart ? challenge.start_date : challenge.end_date;
    return (
      <View style={styles.container}>
        <Text>
          {isStart ? "Start Date:" : "End Date:"}
        </Text>
        <TextInput
          style={this.validStyle(date)}
          onChangeText={date =>
            updateChallenge(
              isStart
                ? { ...challenge, start_date: date }
                : { ...challenge, end_date: date }
            )}
          value={date}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
  challenge: state.newChal.challenge,
  user: state.auth.user,
  isLoading: state.newChal.isLoading
});

const mapDispatchToProps = dispatch => ({
  updateChallenge: challenge => {
    dispatch(updateChallengeAction(challenge));
  },
  submitChallenge: (user, challenge, navigate) => {
    submitChallenge(dispatch, user, challenge, navigate);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  CreateChallengeScreen
);
