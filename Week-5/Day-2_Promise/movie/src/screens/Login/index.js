import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';

import { Input, Button } from 'react-native-elements';
import axios from 'axios';
import { BASE_URL2 } from '@env';

export default function Login({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const postLogin = async () => {
        try {
            const body = {
                username: username,
                password: password,
            };

            const res = await axios.post(`${BASE_URL2}/auth/login`, body, {
                validateStatus: status => {
                    if (status < 201) {
                        navigation.navigate('Home')
                    } else if (status == 400) {
                        Alert.alert(
                            "Alert Title",
                            "STATUS SALAH : 400",
                            [
                                {
                                    text: "Cancel",
                                    onPress: () => console.log("Cancel Pressed"),
                                    style: "cancel"
                                },
                                { text: "OK", onPress: () => console.log("OK Pressed") }
                            ]
                        );
                    }
                }
            });
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View>
            <Input placeholder="Username" onChangeText={text => setUsername(text)} />
            <Input placeholder="Password" onChangeText={text => setPassword(text)} />

            <Button onPress={() => {
                postLogin()
            }} title={'Sign in'} />

            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text>Don't have account yet ?, Register now</Text>
            </TouchableOpacity>
        </View>
    );
}