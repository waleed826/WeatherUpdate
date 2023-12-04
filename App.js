import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WeatherHome from './sources/screens/WeatherHome'
import Weather from './sources/screens/Weather'
import Weathe from './sources/screens/Weathe'


const App = () => {
  const Stack = createNativeStackNavigator();

  return (
        <NavigationContainer>
      <Stack.Navigator initialRouteName='WeatherHome' 
      screenOptions={{
        headerShown:false
      }}
      >
      <Stack.Screen name={'WeatherHome'} component={WeatherHome} />
      <Stack.Screen name={'Weather'} component={Weather} />
      <Stack.Screen name={'Weathe'} component={Weathe} />
      </Stack.Navigator>
      </NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({})