import React, { useState } from 'react';
import { Input, Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import { BASE_URL2 } from '@env';
import { Alert } from 'react-native';

export default function Register({ navigation }) {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [phone, setPhone] = useState('');

    const hurufBesar = /[A-Z]/
    const hurufKecil = /[a-z]/
    const angka = /[0-9]/

    const isValidPassword = (givenPassword) => {
        if (typeof (givenPassword) === "string") {
            if (givenPassword.length < 8) {
                return false //+ ", karena jumlah password kurang, yaitu hanya " + givenPassword.length
            } else if (!hurufBesar.test(givenPassword)) {
                return false //+ ", karena tidak ada huruf besar"
            } else if (!hurufKecil.test(givenPassword)) {
                return false //+ ", karena tidak ada huruf kecil"
            } else if (!angka.test(givenPassword)) {
                return false //+ ", karena tidak ada angka"
            } else {
                return true
            }
        } else {
            return "ERROR: Invalid Type Data"
        }
    }

    const postRegister = async () => {
        try {
            const body = {
                email: email,
                username: username,
                password: password,
                name: {
                    firstname: firstname,
                    lastname: lastname
                },
                address: {
                    city: 'kilcoole',
                    street: '7835 new road',
                    number: 3,
                    zipcode: '12926-3874',
                    geolocation: {
                        lat: '-37.3159',
                        long: '81.1496'
                    }
                },
                phone: phone
            };
            const res = await axios.post(`${BASE_URL2}/users`, body, {
                validateStatus: status => {
                    if (status < 201 && isValidPassword(password)) {
                        navigation.navigate('Login')
                    } else if (status > 201) {
                        Alert.alert(
                            "Alert Title",
                            "Kamu Salah",
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
        <ScrollView>
            <Input
                placeholder="Email"
                onChangeText={text => {
                    setEmail(text);
                }}
            />

            <Input
                placeholder="Username"
                onChangeText={text => {
                    setUsername(text);
                }}
            />

            <Input
                placeholder="password"
                secureTextEntry={true}
                onChangeText={text => setPassword(text)
                }
            />

            <Input
                placeholder="firstname"
                onChangeText={text => {
                    setFirstname(text);
                }}
            />

            <Input
                placeholder="lastname"
                onChangeText={text => {
                    setLastname(text);
                }}
            />

            <Input
                placeholder="phone"
                keyboardType="phone-pad"
                onChangeText={text => {
                    setPhone(text);
                }}
            />

            <Button onPress={() => {
                postRegister();
                if (isValidPassword(password)) {
                    navigation.navigate("Login")
                } else {
                    Alert.alert(
                        "Alert Title",
                        "Kamu kurang",
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
            }} title={'Sign up'} />
        </ScrollView>
    );
}