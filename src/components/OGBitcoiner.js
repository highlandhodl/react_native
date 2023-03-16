import React from "react";
import { Text, StyleSheet, View, Image} from "react-native";

// Step 1: Add images to the assets folder 
// Step 2: Add an image component to the OGBitcoiner component
// Step 3: The source of the image component should be a prop called bitcoinerImage that is passed in from MyFavouriteBitcoiners.js
// Step 4: Style the image component to be 100px by 100px or any size you would like
const OGBitcoiner = props => {
    return (
        <>
            <View>
                <Text>{props.bitcoinerName}</Text>
                <Image style={styles.imageSize} source={props.bitcoinerImage} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
    imageSize: {
        width: 100,
        height: 100,
    }
});

export default OGBitcoiner;