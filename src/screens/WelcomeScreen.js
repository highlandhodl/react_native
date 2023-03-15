import React from "react";
import { Text, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  return <Text style={styles.text}>LFG!</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default WelcomeScreen;
