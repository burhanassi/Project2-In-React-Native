import React, {useReducer, useState} from "react";

export const DataContext = React.createContext({
    num: -1,
    randNum: Math.floor(Math.random()*101),
    redirects: false,
    randNumList: [],
    click: () => {},
    change: (e) => {},
    backToHome: () => {},
    dispatch: (action) => {},
    RNDispatch: (action) => {},
});

const RandomNumbersListReducer = (randNumbersList, action) => {
    switch (action.type) {
        case 'SET': return action.randNumbersList;
        case 'ADD': return [...randNumbersList, action.randNum];
        default: throw new Error("Error with random numbers list!");
    }
}

const  RandomNumberReducer = (randomNumber, action) => {
    switch (action.type) {
        case 'SET': return action.randNum;
        default: throw new Error("Error with random number!");
    }
}

const DataContextProvider = (props, { navigation }) => {
    const [randomNumbersList, dispatch] = useReducer(RandomNumbersListReducer, []);
    const [randomNumber, RNDispatch] = useReducer(RandomNumberReducer, Math.floor(Math.random()*101));

    const [number, setNumber] = useState(-1);
    const [isRedi, setIsRedi] = useState(false);

    const clickHandler = () => {
        setIsRedi(true);
        navigation.navigate('Agree');
    };

    const changeHandler = (e) => {
        if (parseInt(e.target.value) >= 0 && parseInt(e.target.value) <= 100) {
            setNumber(parseInt(e.target.value) || number)
        } else {
            window.alert("Please Enter A Number from 0 to 100");
        }
    };

    const backToHomeHandler = () => {
        history.goBack();
        dispatch({
            type: 'SET',
            randNum: Math.floor(Math.random()*101),
            randNumbersList: []
        });
        setIsRedi(false);
    };

    return (
        <DataContext.Provider
            value={{
                click: clickHandler,
                change: changeHandler,
                backToHome: backToHomeHandler,
                num: number,
                randNum: randomNumber,
                redirects: isRedi,
                randNumList: randomNumbersList,
                dispatch: dispatch,
                RNDispatch: RNDispatch
            }}
        >
            {props.children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;