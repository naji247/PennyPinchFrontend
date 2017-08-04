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

class AddFriendsScreen extends Component {
  constructor() {
    super();
  }

  static navigationOptions = ({ navigation }) => ({
    title: "Pick friends!"
  });

  componentDidMount() {
    const { nav } = this.props;
    // getChallenges(user);
  }

  // componentWillUpdate(nextProps, nextState) {
  //   // return a boolean value
  //   const { user, nav } = this.props;
  //   if (history.isDirty && !history.isLoading) {
  //     getHistory(user);
  //   }
  // }
  render() {
    const { selectFriend, selectedFriends, friends } = this.props;
    const { navigate } = this.props.navigation;
    const { isLoading } = false; // this.props.history;
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    return (
      <View style={styles.container}>
        <ListView
          contentContainerStyle={styles.listView}
          dataSource={ds.cloneWithRows(friends)}
          renderRow={rowData =>
            <FriendRow
              selectFriend={selectFriend}
              selectedFriends={selectedFriends}
              friend={rowData}
            />}
          removeClippedSubviews={false}
          pageSize={50}
          initialListSize={50}
        />
        <Button
          title="Pick a Challenge!"
          onPress={() => navigate("CreateChallengeScreen")}
        />
      </View>
    );
  }
}

class FriendRow extends Component {
  handleFriendClick() {
    const { selectFriend, friend, selectedFriends } = this.props;
    const selected = selectedFriends.includes(friend.id);
    const newSelectedFriends = selected
      ? selectedFriends.filter(item => item !== friend.id)
      : selectedFriends.concat(friend.id);

    selectFriend(newSelectedFriends);
  }

  render() {
    const { friend, selectedFriends } = this.props;
    const selected = selectedFriends.includes(friend.id);
    return (
      <TouchableHighlight
        onPress={() => this.handleFriendClick()}
        style={styles.challengeRow}
      >
        <View style={styles.textContainer}>
          <Text style={styles.date}>
            {friend.name}
          </Text>
          <Text style={styles.date}>
            {selected ? "selected" : ""}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
  friends: state.auth.user.friends.data || [],
  selectedFriends: state.newChal.challenge.users
});

const mapDispatchToProps = dispatch => ({
  selectFriend: selectedFriends => {
    dispatch(selectFriendAction(selectedFriends));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFriendsScreen);
