import { View, TouchableOpacity, Text } from 'react-native'
import { Input } from 'react-native-elements'
import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../helpers/API'

const Register = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dataUser = {
        email: email,
        password: password
    }

    const register = async () => {
        try {
            const res = await axios.post(`${BASE_URL}/register`, dataUser)
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <View>
            <Input placeholder='Email' onChangeText={email => setEmail(email)} />
            <Input placeholder='Password' secureTextEntry={true} onChangeText={pass => setPassword(pass)} />
            <TouchableOpacity onPress={() => {
                register
                navigation.navigate("Login")
            }} ><Text>Register</Text></TouchableOpacity>
        </View>
    )
}

export default Register