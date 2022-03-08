import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// screen
import Login from '../Screens/Login/Login'
import Register from '../Screens/Register/Register'
import BottomTab from './BottomTab'

const Stack = createStackNavigator()

const MainRoutes = () => {
  return (
    <Stack.Navigator initialRouteName='Register' screenOptions={{ headerShown: false }}>
      {/* 
          initial orute name -> untuk nampiloin paling awal
          header shown: on off header
      */}
      <Stack.Screen name='Main' component={BottomTab} options={{headerShown: false}} />
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
      {/* menangkap setiap screen yg ada -> stack screen*/}
      <Stack.Screen name='Register' component={Register} options={{ title: "Regis Yuk" }} />
    </Stack.Navigator>
  )
}

export default MainRoutes