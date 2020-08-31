import React, {useContext, useState} from 'react';
import { Text, View, Button, TextInput } from "react-native";
import DataContext from "../context/data-context";

const SubmitForm = ({navigation}) => {
    const [number, setNumber] = useState(-1);

    const dataContext = useContext(DataContext);

    const clickHandler = () => {
        // setIsRedi(true);
        navigation.navigate('Agree', {num: number});
    };

    const changeHandler = (text) => {
        if (parseInt(text) >= 0 && parseInt(text) <= 100) {
            setNumber(parseInt(text) || number)
        } else {
            window.alert("Please Enter A Number from 0 to 100");
        }
    };

    return (<View >
        <View  >
            <Text >
                Enter a number from 0 to 100
            </Text>
            <TextInput onChangeText={(e) => changeHandler(e)} dataDetectorTypes={'phoneNumber'} />
            <Button onPress={clickHandler} title={"Submit"}/>
        </View>
    </View>);
};

export default SubmitForm;

