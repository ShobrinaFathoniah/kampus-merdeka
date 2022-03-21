import { View, Text, TouchableOpacity, FlatList, Image, BackHandler, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ACCESS_TOKEN, BASE_URL, ImageUrl } from '@env'

const Home = () => {
  const [listMovie, setListMovie] = useState([])
  const [title, setTitle] = useState("")

  useEffect(() => {
    getPopularMovie()
  }, [])

  // tombol exit 
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Do you want to exit the application?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [])

  const getPopularMovie = async () => {
    try {
      const results = await axios.get(`${BASE_URL}/movie/popular`, { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } })
      console.log(results);
      setListMovie(results.data.results)
      setTitle("List Popular Movie")
    } catch (error) {
      console.log(error);
    }
  }

  const getTopRatedMovie = async () => {
    try {
      const results = await axios.get(`${BASE_URL}/movie/top_rated`, { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } })
      console.log(results);
      setListMovie(results.data.results)
      setTitle("List Top Rated Movie")
    } catch (error) {
      console.log(error);
    }
  }

  const getNowPlayingMovie = async () => {
    try {
      const results = await axios.get(`${BASE_URL}/movie/now_playing`, { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } })
      console.log(results);
      setListMovie(results.data.results)
      setTitle("List Now Playing Movie")
    } catch (error) {
      console.log(error);
    }
  }

  const CardMovie = (({ item }) => {
    return (
      <View style={{
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#00000026',
        borderWidth: 1, padding: 10,
        borderRadius: 5
      }}>
        <Image
          source={{ uri: `${ImageUrl}${item.poster_path}` }}
          style={{ height: 250, width: 150, borderRadius: 5, flex: 1, }}
        />
        <View style={{ marginStart: 10, flex: 1, }}>
          <Text style={{ fontSize: 18, alignSelf: 'center', textAlign: 'center' }}>
            {item.title}
          </Text>
          <Text style={{ fontSize: 14, marginTop: 10, textAlign: 'justify' }}>
            {item.overview}
          </Text>
        </View>
      </View>
    )
  })

  return (
    <View style={{ flex: 1, marginHorizontal: 10, }}>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontSize: 35, color: '#630606', alignSelf: 'center', }}> MOVIE </Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: '#F3E9DD50', marginTop: 10 }}>
        <TouchableOpacity style={{ padding: 10, }} onPress={getPopularMovie}>
          <Text>Popular</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ padding: 10, }} onPress={getTopRatedMovie}>
          <Text>Top Rated</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ padding: 10, }} onPress={getNowPlayingMovie}>
          <Text>Now Playing</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ fontSize: 20, paddingTop: 10, color: '#BB6464', marginBottom: 10 }}>{title}</Text>
      <FlatList data={listMovie} keyExtractor={(item, index) => index} renderItem={CardMovie} />
    </View>

  )
}

export default Home