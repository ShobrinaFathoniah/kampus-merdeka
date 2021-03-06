import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {Input, Button} from 'react-native-elements';
import axios from 'axios';
import {BASE_URL_FAKE} from '@env';
import {useSelector} from 'react-redux';

export default function Login({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {usernameDefault, passwordDefault} = useSelector(state => state.login);

  const postLogin = async () => {
    try {
      const body = {
        username: username, //mor_2314
        password: password, //83r5^_
      };

      const res = await axios.post(`${BASE_URL_FAKE}/auth/login`, body, {
        validateStatus: status => {
          if (status <= 201) {
            navigation.navigate('Home');
          } else if (status === 400) {
            Alert.alert('Pemberitahuan', 'HTTP STATUS 400');
          } else if (status === 401) {
            Alert.alert('Pemberitahuan', 'Error: Salah Username atau Password');
          }
        },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Input
        placeholder={usernameDefault}
        onChangeText={text => setUsername(text)}
      />
      <Input
        placeholder={passwordDefault}
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
      />

      <Button
        onPress={() => {
          postLogin();
        }}
        title={'Sign in'}
      />

      <TouchableOpacity
        style={{alignSelf: 'center', marginTop: 10}}
        onPress={() => navigation.navigate('Register')}>
        <Text style={{color: 'blue'}}>Don't have an account? Register now</Text>
      </TouchableOpacity>
    </View>
  );
}
