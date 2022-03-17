import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import axios from 'axios'
import { BASE_URL } from '@env'

const App = () => {

  const dataItem = {
    title: 'Masukkah?',
    description: 'apayakenapa gamaumausk',
    status: 'DONE'
  }

  const kirimData = async () => {
    try {
      const kirim = await axios.post(`${BASE_URL}`, dataItem)
      console.log(kirim);
      
    } catch (error) {
      console.log(error);
    }
  }

  const updateData = async () => {
    try {
      const update = await axios.put(`${BASE_URL}/62331f142a0ad93e1e9483f2`, )
    } catch (error) {
      
    }
  }

  return (
    <View>
      <TouchableOpacity onPress={kirimData}>
        <Text>Kirim</Text>
      </TouchableOpacity>

    </View>
  )
}

export default App