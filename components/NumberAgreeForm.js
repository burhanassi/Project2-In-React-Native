import 'react-native-gesture-handler';
import React, {useState} from "react";
import NumbersList from "./NumbersList";
import { View, Button, Text } from "react-native";

const NumberAgreeForm = ({route, navigation}) => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);
    const [randNum, setRandNum] = useState(Math.floor(Math.random()*101));
    const [randNumList, setRandNumList] = useState([]);

    const {num} = route.params;

    const number = parseInt(JSON.stringify(num));

    const plusButtonHandler = () => {
        checkHandler();
        if(randNum > min){
            setMin(randNum+1);
        }
        const randomNumber = Math.floor(Math.random() * (max - randNum + 1) + randNum);
        setRandNum(randomNumber);
        setRandNumList([...randNumList, randNum])
    };

    const minusButtonHandler = () => {
        checkHandler();
        if(randNum < max){
            setMax(randNum-1);
        }
        const randomNumber = Math.floor(Math.random() * (randNum - min + 1) + min);
        setRandNum(randomNumber);
        setRandNumList([...randNumList, randNum]);
    };

    const checkHandler = () => {
        if(randNum === number){
            navigation.navigate('Summary', {num: number});
        }
    }

    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 50
        }}>
            <View style={{
                flex: 1,
                width: 390,
                flexDirection: 'column',
                alignItems: 'center',
                borderColor: 'black',
                borderWidth: 1,
                borderRadius:  40,
                height: 200,
                backgroundColor: '#fff'
            }}>
                <View style={{
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 25,
                        marginTop: 20,
                        borderBottomWidth: 1.5,
                        borderColor: 'gray',
                    }}>This is a random number.</Text>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 25,
                        marginTop: 10,
                        borderBottomWidth: 1.5,
                        borderColor: 'gray',
                    }}>Your number is less or more?</Text>
                </View>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 30,
                    marginTop: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    borderRadius: 50,
                    padding: 20
                }}>
                    {randNum}
                </Text>
                <View style={{
                    width: 250,
                    marginTop: 40,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <Button color={"red"} title={"More"} onPress={() => plusButtonHandler()}/>
                    <Button color={"green"} title={"Less"} onPress={() => minusButtonHandler()}/>
                </View>
                <View style={{
                    marginTop: 30,
                    width: 700,
                    paddingBottom: 30,
                    borderBottomWidth: 1.5,
                    borderColor: 'gray'
                }}></View>
                <NumbersList randNumList={randNumList}/>
            </View>
        </View>
    );
};

export default NumberAgreeForm;