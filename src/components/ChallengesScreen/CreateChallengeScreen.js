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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class CreateChallengeScreen extends Component {
  constructor() {
    super();
  }

  static navigationOptions = ({ navigation }) => ({
    title: "Challenges",
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
    const selectedUsers = challenge.users;
    const userPreview =
      selectedUsers.length > 5 ? selectedUsers.slice(0, 5) : selectedUsers;
    const overflowPreview =
      selectedUsers.length > 5 ? selectedUsers.length - 5 : -1;
    return isLoading ? (
      <LoadingComponent size="large" />
    ) : (
      <KeyboardAwareScrollView
        contentContainerStyle={styles.createChallengeContainer}
      >
        <ChallengeNameInput {...this.props} />
        <ChallengeDateInput field="start_date" {...this.props} />
        <ChallengeDateInput field="end_date" {...this.props} />
        <ChallengeGoalInput {...this.props} />
        <View style={{ flex: 7 }}>
          <Text
            style={{ margin: 10, fontSize: 20, fontFamily: "HelveticaNeue" }}
          >
            Participants:
          </Text>
          <Text
            style={{
              margin: 5,
              marginLeft: 20,
              fontSize: 15,
              fontFamily: "HelveticaNeue"
            }}
          >
            You
          </Text>
          {userPreview.map((value, index) => {
            return (
              <Text style={styles.userPreview} key={index}>
                {value.name}
              </Text>
            );
          })}
          {overflowPreview == -1 ? null : (
            <Text
              style={{
                margin: 5,
                marginLeft: 20,
                fontSize: 15,
                fontFamily: "HelveticaNeue"
              }}
            >
              and {overflowPreview} more
            </Text>
          )}
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableHighlight
            style={{ flex: 1, backgroundColor: colors.appGreen }}
            onPress={() => submitChallenge(user, challenge, navigation)}
            underlayColor={colors.appTransparentGreen}
          >
            <View style={{ height: 70, justifyContent: "center" }}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 16,
                  color: colors.appWhite
                }}
              >
                Send
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const ChallengeNameInput = ({ challenge, updateChallenge }) => (
  <View style={{ flex: 1, flexDirection: "row" }}>
    <View style={styles.createChallengeInput}>
      <TextInput
        style={{ flex: 1 }}
        onChangeText={name => updateChallenge({ ...challenge, name: name })}
        value={challenge.name}
        placeholder="Challenge Name"
      />
    </View>
  </View>
);

const ChallengeGoalInput = ({ challenge, updateChallenge }) => (
  <View style={{ flex: 1, flexDirection: "row" }}>
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View style={styles.createChallengeInput}>
        <TextInput
          style={{ flex: 1 }}
          onChangeText={goal => updateChallenge({ ...challenge, goal: goal })}
          keyboardType="numeric"
          placeholder="Goal"
          value={challenge.goal}
        />
      </View>
    </View>
  </View>
);

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
      : moment()
          .add(1, "day")
          .format("MMM. DD, YYYY");
    var maxDate = isStart
      ? moment()
          .add(1, "month")
          .format("MMM. DD, YYYY")
      : moment()
          .add(2, "months")
          .format("MMM. DD, YYYY");
    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <DatePicker
              style={styles.createChallengeInput}
              date={date}
              mode="date"
              format="MMM. DD, YYYY"
              placeholder={isStart ? "Start Date" : "End Date"}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              showIcon={false}
              customStyles={{
                dateInput: {
                  borderWidth: 0,
                  alignItems: "flex-start",
                  justifyContent: "center"
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
