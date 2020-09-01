import React, {useState} from 'react';
import { Text, View, Button, TextInput, StyleSheet } from "react-native";

const SubmitForm = ({navigation}) => {
    const [number, setNumber] = useState(-1);
    const [disable, setDisable] = useState(true);

    const clickHandler = () => {
        navigation.navigate('Agree', {num: number});
    };

    const changeHandler = (text) => {
        if (parseInt(text) >= 0 && parseInt(text) <= 100) {
            setDisable(false);
            setNumber(parseInt(text) || number)
        } else {
            setDisable(true);
            window.alert("Please Enter A Number from 0 to 100");
        }
    };

    return (<View style={styles.mainView}>
        <View  style={styles.nestedView}>
            <Text style={styles.text}>
                Enter a number from 0 to 100
            </Text>
            <TextInput style={styles.textInput} onChangeText={(e) => changeHandler(e)} autoCompleteType={'cc-number'} keyboardType={'numeric'}/>
            <Button color="#f150ff" disabled={disable} onPress={clickHandler} title={"Submit"}/>
        </View>
    </View>);
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 200
    },
    nestedView: {
        flexDirection: 'column',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius:  40,
        height: 200,
        width: 390,
        backgroundColor: '#fff'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 20,
    },
    textInput: {
        height: 40,
        width: 350,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: "gray"
    }
})

export default SubmitForm;

