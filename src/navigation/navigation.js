import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SearchScreen from '../screens/SearchScreen'
import ResultsScreen from '../screens/ResultsScreen'
import DetailsScreen from '../screens/DetailsScreen'

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator  initialRouteName='Search'>
            <Stack.Screen
                name='Search'
                component={SearchScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Results'
                component={ResultsScreen}
            />
            <Stack.Screen
                name='Details'
                component={DetailsScreen}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}