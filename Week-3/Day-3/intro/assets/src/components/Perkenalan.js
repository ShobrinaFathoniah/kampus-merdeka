import { Text, View } from 'react-native'
import React from 'react'

// bikin component panggil 3 kali di app js  harus memiliki nilai dinamis
const Perkenalan = props => {
    return (
      <View>
        <Text>Hallo nama saya, {props.name}. Saya berumur {props.age}. Hobi saya adalah {props.hobi}</Text>
      </View>
    );
};

export default Perkenalan