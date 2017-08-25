import React, { Component } from "react";
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  Image,
  View,
  ListView,
  Button
} from "react-native";
import { connect } from "react-redux";
import * as styles from "./ChallengesScreen.css";
import { LoadingComponent } from "../UtilityComponents/LoadingComponents";
import { NavigationActions } from "react-navigation";
import { selectFriendAction } from "../../actions/challengeActions";
import moment from "moment";
import * as colors from "../../style/colors";

class AddFriendsScreen extends Component {
  constructor() {
    super();
  }

  static navigationOptions = ({ navigation }) => ({
    title: "Challenges",
    tabBarIcon: ({ tintColor }) =>
      <Image source={require("./trophy-05.png")} style={styles.icon} />,
    headerLeft: (
      <Button
        color={colors.appWhite}
        title="Back"
        onPress={() => navigation.dispatch(NavigationActions.back(null))}
      />
    ),
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle
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
    if (friends.length === 0) {
      return (
        <View style={styles.friendScreen}>
          <Text style={styles.noFriends}>
            Sadly you have no friends using the app yet :(
          </Text>
          <Text style={styles.noFriends}>
            Invite them to come join the party!
          </Text>
        </View>
      );
    }
    return (
      <View style={styles.friendScreen}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <ListView
            contentContainerStyle={{ flex: 1 }}
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
        </View>
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
        style={!selected ? styles.friendRow : styles.activeFriendRow}
        underlayColor={colors.appTransparentCyan}
      >
        <View style={styles.textContainer}>
          <Text style={!selected ? styles.friendName : styles.activeFriendName}>
            {friend.name}
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
