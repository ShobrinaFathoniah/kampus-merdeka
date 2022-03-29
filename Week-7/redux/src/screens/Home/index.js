import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

export default function Home() {
  const namaLengkap = useSelector(state => state);

  return (
    <View>
      <Text>{namaLengkap}</Text>
    </View>
  );
}
