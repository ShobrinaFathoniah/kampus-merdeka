import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// screen
import Login from '../screens/Login'
import Register from '../screens/Register'
import BottomTab from './BottomTabs'

const Stack = createStackNavigator()

const Routes = () => {
    return (
        <Stack.Navigator initialRouteName='Register' screenOptions={{ headerShown: false }}>
            {/* 
          initial orute name -> untuk nampiloin paling awal
          header shown: on off header
      */}
            <Stack.Screen name='Main' component={BottomTab} options={{ headerShown: false }} />
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
            {/* menangkap setiap screen yg ada -> stack screen*/}
            <Stack.Screen name='Register' component={Register} options={{ title: "Regis Yuk" }} />
        </Stack.Navigator>
    )
}

export default Routes