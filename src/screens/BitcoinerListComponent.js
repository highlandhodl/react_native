//step 1: import React and React Native components
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

//step 2: create a react component as same as previous exercise
//step 3: create array of bitcoiners
//step 4: create a FlatList component
//step 5: pass in bitcoiners array as data prop
//step 6: pass in a keyExtractor prop
//step 7: pass in a renderItem prop
//step 8: pass in a function that returns a Text component
//step 9: pass in the name of the bitcoiner as the Text component's child
const BitcoinerListComponent = () => {
    const bitcoiners = [
        { name: "Satoshi Nakamoto" },
        { name: "Hal Finney" },
        { name: "Nick Szabo" }, 
    ];  

    return (
        <View>
            <FlatList
                data={bitcoiners}
                keyExtractor={(bitcoiner) => bitcoiner.name}
                renderItem={({ item }) => {
                    return <Text style={styles.text}>{item.name}</Text>;
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        marginVertical: 50,
    },
});

//step 10: export component
export default BitcoinerListComponent;
