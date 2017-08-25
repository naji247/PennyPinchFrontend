import React, { Component } from "react";
import {
  TextInput,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  Button
} from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import * as styles from "./ChallengesScreen.css";
import { LoadingComponent } from "../UtilityComponents/LoadingComponents";
import {
  updateChallengeAction,
  submitChallenge
} from "../../actions/challengeActions";
import moment from "moment";
import * as colors from "../../style/colors";
import DatePicker from "react-native-datepicker";

class CreateChallengeScreen extends Component {
  constructor() {
    super();
  }

  static navigationOptions = ({ navigation }) => ({
    title: "Challenges",
    tabBarIcon: ({ tintColor }) =>
      <Image source={require("./trophy-05.png")} style={styles.icon} />,
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
    headerLeft: (
      <Button
        color={colors.appWhite}
        title="Back"
        onPress={() => navigation.dispatch(NavigationActions.back(null))}
      />
    )
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
  <View style={{ flex: 1, flexDirection: "row" }}>
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View style={{ marginBottom: 5 }}>
        <Text>Name:</Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <TextInput
          style={{ flex: 1, height: 40, borderWidth: 1 }}
          onChangeText={name => updateChallenge({ ...challenge, name: name })}
          value={challenge.name}
        />
      </View>
    </View>
  </View>;

const ChallengeGoalInput = ({ challenge, updateChallenge }) =>
  <View style={{ flex: 1, flexDirection: "row" }}>
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View style={{ marginBottom: 5 }}>
        <Text>Goal:</Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <TextInput
          style={{ flex: 1, height: 40, borderWidth: 1 }}
          onChangeText={goal => updateChallenge({ ...challenge, goal: goal })}
          keyboardType="numeric"
          value={challenge.goal}
        />
      </View>
    </View>
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
    var minDate = isStart
      ? moment().format("MMM. DD, YYYY")
      : moment().add(1, "day").format("MMM. DD, YYYY");
    var maxDate = isStart
      ? moment().add(1, "month").format("MMM. DD, YYYY")
      : moment().add(2, "months").format("MMM. DD, YYYY");
    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <View style={{ marginBottom: 5 }}>
            <Text>
              {isStart ? "Start Date:" : "End Date:"}
            </Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <DatePicker
              style={{ flex: 1, height: 40, borderWidth: 1 }}
              date={date}
              mode="date"
              format="MMM. DD, YYYY"
              placeholder="select date"
              minDate={minDate}
              maxDate={maxDate}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              showIcon={false}
              customStyles={{
                dateInput: {
                  borderWidth: 0
                }
                // ... You can check the source to find the other keys.
              }}
              onDateChange={date => {
                updateChallenge(
                  isStart
                    ? { ...challenge, start_date: date }
                    : { ...challenge, end_date: date }
                );
              }}
            />
          </View>
        </View>
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
