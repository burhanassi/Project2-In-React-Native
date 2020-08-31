import React from "react";
import {Text, View, ScrollView} from "react-native";

const NumbersList = (props) => {

    return <View >
        <Text >
            This is the random numbers list:
        </Text>
        <ScrollView>
            {props.randNumList.map(number => (
                <Text key={number}>{number}</Text> // try to solve: key not always unique
            ))}
        </ScrollView>
    </View>
};

export default NumbersList;