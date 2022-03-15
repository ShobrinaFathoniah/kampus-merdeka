import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ACCESS_TOKEN, BASE_URL } from './src/helpers/apiAccessToken'

const App = () => {
  const [listMovie, setListMovie] = useState([])

  const getListMovie = async () => {
    try {
      const results = await axios.get(`${BASE_URL}/movie/popular`, { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } })

      setListMovie(results.data.results)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getListMovie()
  }, [])

  const cardMovie = ((item) => {
    return (
      <View>
        <Image />
        <Text>
          {item.title}
        </Text>
      </View>
    )
  })

  return (
    <View>
      <Text>list Movie</Text>
      <FlatList data={listMovie} keyExtractor={(item, index) => index} renderItem={cardMovie} />
    </View>

  )
}

export default App