import React from "react";
import {Text, View, FlatList, StyleSheet} from "react-native";

const NumbersList = (props) => {

    return <View style={styles.mainDiv}>
        <Text style={styles.text}>
            This is the random numbers list:
        </Text>
        <FlatList  data={props.randNumList} renderItem={({item}) => (
            <Text style={styles.itemText} key={item}>{item}</Text>
        )} keyExtractor={item => item}/>
        {/*this view to solve flatList problem*/}
        <View>
            <Text style={styles.solve}>item</Text>
        </View>
    </View>
};

const styles = StyleSheet.create({
    mainDiv: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: 70
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
        borderBottomWidth: 1.5,
        borderColor: 'gray',

    },
    itemText: {
        textAlign: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',
        fontSize: 15,
        margin: 10,
        borderColor: 'gray',
        borderBottomWidth: 1,
        width: 40,
    },
    solve: {
        margin: 148
    }
})

export default NumbersList;