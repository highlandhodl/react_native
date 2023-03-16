import React from "react";
import { Text, StyleSheet, Button, TouchableOpacity, View} from "react-native";

//step 1: setup the function component to return JSX
//step 2: add a text element to display the text "Welcome Screen"
//step 3: add a button element to display the text "Normal Button"
//step 4: add a title prop to the button element
//step 5: add an onPress prop to the button element that logs "Button pressed" to the console when the button is pressed
//step 6: add a TouchableOpacity element to display the text "TouchableOpacity button"
//step 7: add an onPress prop to the TouchableOpacity element that logs "TouchableOpacity Pressed" to the console when the button is pressed
//step 8: add a View element as a child of the TouchableOpacity element
//step 9: add a Text element as a child of the View element 
const WelcomeScreen = () => {
  return (
    <>
      <Text style={styles.text}>Welcome Screen</Text>
      <Button
        title="Normal Button"
        onPress={() => console.log("Button pressed")}
      />
      <TouchableOpacity onPress={() => console.log("TouchableOpacity Pressed")}>
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
