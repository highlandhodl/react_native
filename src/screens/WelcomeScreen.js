import React from "react";
import { Text, StyleSheet, Button, TouchableOpacity, View} from "react-native";


// Step 1: In button add onPress prop and pass in a function that will navigate to the Bitcoin screen
// Step 1a: The navigate function takes in the name of the screen you want to navigate to. In this case it is Bitcoin.
// Step 2: In the touchable opacity add onPress prop and pass in a function that will navigate to the Bitcoiners screen 
// Step 2a: The navigate function takes in the name of the screen you want to navigate to. In this case it is Bitcoiners.
const WelcomeScreen = props => {
  return (
    <>
      <Text style={styles.text}>Welcome Screen</Text>
      <Button
        title="Navigate to Bitcoin Screen"
        onPress={() => props.navigation.navigate("Bitcoin")}
      />
      <TouchableOpacity onPress={() => props.navigation.navigate('Bitcoiners')}>
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
