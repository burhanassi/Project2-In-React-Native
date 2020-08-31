import 'react-native-gesture-handler';
import React, {useContext, useState} from "react";
import NumbersList from "./NumbersList";
import {DataContext} from "../context/data-context";
import { View, Button, Text } from "react-native";

const NumberAgreeForm = ({route, navigation}) => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);
    const [randNum, setRandNum] = useState(Math.floor(Math.random()*101));
    const [randNumList, setRandNumList] = useState([]);

    const {num} = route.params;

    const dataContext = useContext(DataContext);
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
        if(randNum == JSON.stringify(num)){
            navigation.navigate('Summary', {num: JSON.stringify(num)});
        }
    }

    return (
        <View>
            <View >
                <Text>
                    <Text>This is a random number.</Text>
                    <Text>Your number is less or more?</Text>
                </Text>
                <Text >
                    {randNum}
                </Text>
                <View>
                    <Button title={"+"} onPress={() => plusButtonHandler()}/>
                    <Button title={"-"} onPress={() => minusButtonHandler()}/>
                </View>
            </View>
            <NumbersList randNumList={randNumList}/>
        </View>
    );
};

export default NumberAgreeForm;