import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Input } from 'react-native-elements'
import axios from 'axios'
import { BASE_URL } from '../../helpers/API'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const data = {
        email: email,
        password: password
    }

    const login = async () => {
        try {
            const res = await axios.post(`${BASE_URL}/login`, data)
            console.log(res.data.token);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View>
            <Input placeholder='Email' onChangeText={email => setEmail(email)} />
            <Input placeholder='Password' onChangeText={pass => setPassword(pass)} />
            <TouchableOpacity onPress={login}><Text>LOGIN</Text></TouchableOpacity>
            <Text onPress={() => {
                navigation.navigate("Register")
            }}>Not Have an Account</Text>
        </View>
    )
}

export default Login

//challenge
// tambah 2 screen ada login + regis kirim api ke fake store api
// dariregist if 201/200 -> navigate ke login
//input regis salah alert
// login if 201/200 ->navigate ke home
// login validation pk regex 
// login kalau 400 kasih alert