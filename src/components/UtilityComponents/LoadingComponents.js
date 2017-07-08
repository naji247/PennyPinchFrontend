import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import * as styles from "./LoadingComponents.css";

const LoadingComponent = ({ size }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} />
    </View>
  );
};

module.exports = {
  LoadingComponent
};
