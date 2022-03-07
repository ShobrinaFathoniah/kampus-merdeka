import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Register = (props) => {
    return (
        <View>
            <Text>Register</Text>

            <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                <Text> Goes to Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Register