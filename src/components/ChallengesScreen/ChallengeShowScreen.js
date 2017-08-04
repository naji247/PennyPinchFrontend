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
    const { isLoading } = this.props;
    return isLoading
      ? <LoadingComponent size="large" />
      : <View style={styles.container}>
          <Text>HELLO</Text>
        </View>;
  }
}

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
