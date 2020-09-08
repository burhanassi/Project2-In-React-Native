import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import SubmitForm from "./components/SubmitForm";
import NumberAgreeForm from "./components/NumberAgreeForm";
import Summary from "./components/Summary";
import SplashScreen from "./components/SplashScreen/SplashScreen";

const Stack = createStackNavigator();

export default function App() {
    const [isSplash, setIsSplash] = useState(true);

    useEffect(() => {
        setTimeout(() => {setIsSplash(false)}, 3000);
    })

  return (
      <NavigationContainer style={styles.container}>
        <Stack.Navigator>
          {isSplash && <Stack.Screen name={" "} component={SplashScreen}/>}
          <Stack.Screen name={'Home'} component={SubmitForm}/>
          <Stack.Screen name={'Agree'} component={NumberAgreeForm}/>
          <Stack.Screen name={'Summary'} component={Summary}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
