import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home'
import Details from './Details'

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ title: "Главная", headerShown: false}} component={Home} />
        <Stack.Screen name="Details" options={{ title: "Детали" }} component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation