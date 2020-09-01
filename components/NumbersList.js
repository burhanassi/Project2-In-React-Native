import React from "react";
import {Text, View, ScrollView} from "react-native";

const NumbersList = (props) => {

    return <View style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 30
    }}>
        <Text style={{
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 20,
            borderBottomWidth: 1.5,
            borderColor: 'gray',
        }}>
            This is the random numbers list:
        </Text>
        <ScrollView style={{
            margin: 10
        }}>
            {props.randNumList.map(number => (
                <Text style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 15,
                    margin: 10,
                    borderColor: 'gray',
                    borderBottomWidth: 1,
                    width: 30
                }} key={number}>{number}</Text> // try to solve: key not always unique
            ))}
        </ScrollView>
    </View>
};

export default NumbersList;