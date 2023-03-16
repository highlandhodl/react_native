import React from "react";
import { Text, StyleSheet, View, Image} from "react-native";
import OGBitcoiner from "../components/OGBitcoiner";

//Step 5: Add the bitcoinerImage prop to the OGBitcoiner component
//Step 6: Use require to import the image from the assets folder
//Step 7: Pass the image to the bitcoinerImage prop
const MyFavouriteBitcoiners = props => {
    return (
        <>
            <Text style={styles.text}>Awesome Bitcoiner</Text>
            <View>
                <OGBitcoiner bitcoinerName="Satoshi Nakamoto" bitcoinerImage={require('../../assets/sn.png')} />
                <OGBitcoiner bitcoinerName="Hal Finney" bitcoinerImage={require('../../assets/hf.png')}/>
                <OGBitcoiner bitcoinerName="Nick Szabo" bitcoinerImage={require('../../assets/ns.png')}/>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    }
});

export default MyFavouriteBitcoiners;


