// step 1: create a new file in the src/screens folder called BitcoinComponent.js
// step 2: import React, Text and StyleSheet
import React from "react";
import {Text, StyleSheet } from "react-native";

// step 3: create a new component called BitcoinComponent
const BitcoinComponent = () => {
    return (
        <Text style={styles.textStyle}>There will only ever be 21 million Bitcoin!</Text>
    );
}

// step 4: create a new style sheet
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

// step 5: export the component
export default BitcoinComponent;
