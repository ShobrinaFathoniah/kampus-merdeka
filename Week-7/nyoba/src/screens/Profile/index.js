import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setNama} from './redux/action';

export default function Profile() {
  const nama = useSelector(state => state.profile.name);
  const age = useSelector(state => state.profile.age);
  // useSelector -> function yang menerima satu parameter function

  const [myName, setMyName] = useState('');

  //update reducer cuman pake dispatch
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Profile</Text>

      <Text>{}</Text>

      <TextInput
        placeholder="isikan nama anda"
        onChangeText={text => setMyName(text)}
      />
      <TouchableOpacity onPress={() => dispatch(setNama(myName))}>
        <Text>update nama</Text>
      </TouchableOpacity>
      <Text>
        nama saya {nama}, saya {age} tahun
      </Text>
    </View>
  );
}
