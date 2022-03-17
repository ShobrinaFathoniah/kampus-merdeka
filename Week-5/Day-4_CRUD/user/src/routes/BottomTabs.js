import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from 'react-native-vector-icons/Feather'

//screens
import Home from "../screens/Home";;
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator()

const BottomTab = () => {
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: () => <Feather name="home" size={20} color="red" />, headerShown: false }} />
            <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon: () => <Feather name="user" size={20} color="red" />, headerShown: false }} />
        </Tab.Navigator>
    )
}

export default BottomTab