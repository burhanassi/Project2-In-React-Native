import React from 'react';
import { View, Button, Text, StyleSheet } from "react-native";

const Summary = ({route,navigation}) => {
    const {num} = route.params;
    return (
        <View style={styles.mainView}>
            <View style={styles.nestedView}>
                <Text style={styles.text1}>
                    YOU FOUND IT! 🎉
                </Text>
                <Text style={styles.text2}>
                    Your Number:
                </Text>
                <Text style={styles.number}>
                    {JSON.stringify(num)}
                </Text>
            </View>
            <Button onPress={() => {
                navigation.pop(2)
            }} color={'green'} title={"Go To Home Page!"}/>
        </View>
    )
};

const styles = StyleSheet.create({
    mainView: {
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
        width: 390
    },
    nestedView: {
        flexDirection: 'column',
        alignItems: 'center',
        height: 400,
        width: 400,
        padding: 30
    },
    text1: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    text2: {
        fontSize: 30,
        borderColor: 'gray',
        borderBottomWidth: 1.5,
        marginBottom: 30
    },
    number: {
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
    }
})

export default Summary;