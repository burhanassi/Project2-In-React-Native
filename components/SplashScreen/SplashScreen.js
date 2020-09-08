import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>RANDOM NUMBERS GAME!</Text>
            <Image style={styles.image} source={{uri: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.15752-9/118383451_307388830355937_5980451724162336571_n.jpg?_nc_cat=107&_nc_sid=b96e70&_nc_ohc=9AW1USJ1amkAX_iOJcD&_nc_ht=scontent.ftlv5-1.fna&oh=34d54a0473a77bb31797a6a7b505e023&oe=5F7611ED'}}/>
            <Text style={styles.smallText}>powered by Burhan</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 100,
        fontFamily: 'sans-serif'
    },
    smallText: {
        fontSize: 10,
        fontFamily: 'sans-serif'
    },
    image: {
        height: 500,
        width: '100%'
    }
})

export default SplashScreen;