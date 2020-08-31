import React from 'react';
import { View, Button, Text } from "react-native";

const Summary = ({route,navigation}) => {
    const {num} = route.params;
    return (
        <View>
            <View >
                <Text >
                    Your Number:
                </Text>
                <Text >
                    {JSON.stringify(num)}
                </Text>
            </View>
            <Button onPress={() => {
                navigation.pop(2)
            }} title={"Go To Home Page!"}/>
        </View>
    )
};

export default Summary;