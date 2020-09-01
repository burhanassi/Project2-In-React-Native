import React from 'react';
import { View, Button, Text } from "react-native";

const Summary = ({route,navigation}) => {
    const {num} = route.params;
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
            marginBottom: 30,
            marginLeft: 'auto',
            marginRight: 'auto',
            borderColor: 'black',
            borderWidth: 1,
            borderRadius:  40,
            backgroundColor: '#fff',
            width: 380
        }}>
            <View style={{
                flexDirection: 'column',
                alignItems: 'center',
                // borderColor: 'black',
                // borderWidth: 1.5,
                // borderRadius:  200,
                height: 400,
                width: 400,
                padding: 30
                // backgroundColor: 'salmon'
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 30,
                }}>
                    YOU FOUND IT! 🎉
                </Text>
                <Text style={{
                    fontSize: 30,
                    borderColor: 'gray',
                    borderBottomWidth: 1.5,
                    marginBottom: 30
                }}>
                    Your Number:
                </Text>
                <Text style={{
                    marginTop: 50,
                    paddingTop: 30,
                    fontWeight: 'bold',
                    fontSize: 35,
                    width: 120,
                    height: 120,
                    borderColor: 'gray',
                    borderWidth: 1.5,
                    borderRadius: 60,
                    textAlign: 'center',
                    alignItems: 'center'
                }}>
                    {JSON.stringify(num)}
                </Text>
            </View>
            <Button onPress={() => {
                navigation.pop(2)
            }} color={'green'} title={"Go To Home Page!"}/>
        </View>
    )
};

export default Summary;