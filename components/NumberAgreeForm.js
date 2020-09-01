import 'react-native-gesture-handler';
import React, {useState, useEffect} from "react";
import NumbersList from "./NumbersList";
import { View, Button, Text, StyleSheet } from "react-native";

const NumberAgreeForm = ({route, navigation}) => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);
    const [randNum, setRandNum] = useState(Math.floor(Math.random()*101));
    const [randNumList, setRandNumList] = useState([]);

    const {num} = route.params;

    const number = parseInt(JSON.stringify(num));

    const plusButtonHandler = () => {
        setMin(randNum+1);
        const randomNumber = Math.floor(Math.random() * (max - (randNum + 1) + 1) + (randNum + 1));
        setRandNum(randomNumber);
        setRandNumList([...randNumList, randNum])
    };

    const minusButtonHandler = () => {
        setMax(randNum-1);
        const randomNumber = Math.floor(Math.random() * ((randNum-1) - min + 1) + min);
        setRandNum(randomNumber);
        setRandNumList([...randNumList, randNum]);
    };

    useEffect(() => {
        if(randNum === number){
            navigation.navigate('Summary', {num: number});
        }
    });

    return (
        <View style={styles.mainView}>
            <View style={styles.nestedView}>
                <View style={styles.textView}>
                    <Text style={styles.text1}>This is a random number.</Text>
                    <Text style={styles.text1}>Your number is less or more?</Text>
                </View>
                <Text style={styles.text2}>
                    {randNum}
                </Text>
                <View style={styles.buttonView}>
                    <Button color={"red"} title={"More"} onPress={() => plusButtonHandler()}/>
                    <Button color={"green"} title={"Less"} onPress={() => minusButtonHandler()}/>
                </View>
                <NumbersList randNumList={randNumList}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 30
    },
    nestedView: {
        flex: 1,
        width: 390,
        flexDirection: 'column',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius:  40,
        height: 200,
        backgroundColor: '#fff'
    },
    textView: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    text1: {
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 15,
        borderBottomWidth: 1.5,
        borderColor: 'gray',
    },
    text2: {
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 50,
        padding: 20
    },
    buttonView: {
        width: 250,
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default NumberAgreeForm;