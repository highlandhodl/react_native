import React from "react";
import { Text, StyleSheet, View} from "react-native";
import OGBitcoiner from "../components/OGBitcoiner";

// Step 5: Use the OGBitcoiner component in MyFavouriteBitcoiners.js
// Step 6: Pass in the bitcoinerName prop to the OGBitcoiner component
// Step 7: Add the MyFavouriteBitcoiners component to the navigator in App.js
// Step 8: Run the app and see the results
const MyFavouriteBitcoiners = props => {
    return (
        <>
            <Text style={styles.text}>Awesome Bitcoiner</Text>
            <View>
                <OGBitcoiner bitcoinerName="Satoshi Nakamoto" />
                <OGBitcoiner bitcoinerName="Hal Finney" />
                <OGBitcoiner bitcoinerName="Nick Szabo" />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
});

export default MyFavouriteBitcoiners;


