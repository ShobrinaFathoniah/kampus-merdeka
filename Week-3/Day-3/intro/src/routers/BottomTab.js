import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from 'react-native-vector-icons/Feather'

//screens
import Home from "../Screens/Home/Home";
import Explore from "../Screens/Explore/Explore";
import Profile from "../Screens/Profile/Profile";

const Tab = createBottomTabNavigator()

const BottomTab = () => {
    return(
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={Home} options={{tabBarIcon: () => <Feather name="home" size={20} color="red" /> }} />
            <Tab.Screen name="Explore" component={Explore} options={{tabBarIcon: () => <Feather name="search" size={20} color="red" /> }} />
            <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon: () => <Feather name="user" size={20} color="red" /> }} />
        </Tab.Navigator>
    )
}

export default BottomTab