import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import SubmitForm from "./components/SubmitForm";
import NumberAgreeForm from "./components/NumberAgreeForm";
import Summary from "./components/Summary";

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer style={styles.container}>
        <Stack.Navigator>
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
