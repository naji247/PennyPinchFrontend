import React, { PropTypes } from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import FBLoginButton from "../FBLoginButton/FBLoginButton";
import { loginAction } from "../../actions/authActions";
import * as styles from "./LoginScreen.css";
import { connect } from "react-redux";
import { LoadingComponent } from "../UtilityComponents/LoadingComponents";
const LoginScreen = ({ isLoading, navigation }) => {
  return isLoading ? (
    <LoadingComponent size="large" />
  ) : (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <Image
          resizeMode="cover"
          style={styles.backdrop}
          source={require("./gradient-14.png")}
        />
        {/* <Image src={require("./Loot-15.png")Image} /> */}
      </View>
      <View style={styles.overlay}>
        <Image
          resizeMode="cover"
          style={styles.logo}
          source={require("./loot.png")}
        />

        <FBLoginButton style={styles.fbLogin} />
      </View>
    </View>
  );
};

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

LoginScreen.navigationOptions = {
  header: null
};
const mapStateToProps = state => ({
  isLoading: state.auth.isLoading
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
