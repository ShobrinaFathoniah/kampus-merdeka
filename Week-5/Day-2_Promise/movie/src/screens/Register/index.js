import React, { useState } from 'react';
import { Input, Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import { BASE_URL_FAKE } from '@env';
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

    const emailValidate = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    const checkEmail = email => {
        if (email) {
            if (emailValidate.test(email)) {
                return true
            } else {
                return false
            }
        } else {
            return false
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

            if (isValidPassword(password) && checkEmail(email)) {
                const res = await axios.post(`${BASE_URL_FAKE}/users`, body, {
                    validateStatus: status => {
                        if (status < 201) {
                            navigation.navigate('Login')
                        } else if (status > 201) {
                            Alert.alert(
                                "Pemberitahuan",
                                "Terdapat Kesalahan"
                            );
                        }
                    }
                });

                console.log(res);
            } else {
                Alert.alert(
                    "Pemberitahuan",
                    "Email atau Password Invalid"
                );
            }
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
            }} title={'Sign up'} />
        </ScrollView>
    );
}