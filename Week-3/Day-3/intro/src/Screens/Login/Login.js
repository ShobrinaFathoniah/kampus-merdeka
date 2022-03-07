import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Login(props) {
    return (
        <View>
            <Text>Login</Text>

            <TouchableOpacity onPress={() => props.navigation.navigate("Main")}>
                <Text>
                    Goes to Main
                </Text>
            </TouchableOpacity>
        </View>
    )
}