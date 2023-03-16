import React from "react";
import { Text, StyleSheet, View} from "react-native";

// Step 1: Create a new OGBitcoiner component in a new folder called components. This will house reusable OGBitcoiner components.
// Step 2: Give the OGBitcoiner component a prop called bitcoinerName
// Step 3: Use the bitcoinerName prop to display
// Step 4: Import the OGBitcoiner component into MyFavouriteBitcoiners.js
const OGBitcoiner = props => {
    return (
        <>
            <View>
                <Text>{props.bitcoinerName}</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
});

export default OGBitcoiner;