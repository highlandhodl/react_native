import React from "react";
import { Text, StyleSheet, TouchableOpacity, View} from "react-native";

const WelcomeScreen = props => {
  return (
    <>
      <Text style={styles.text}>Welcome Screen</Text>
      <TouchableOpacity onPress={() => console.log("This is a test")}>
        <View>
          <Text>TouchableOpacity button</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default WelcomeScreen;
