import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import Card from './assets/src/components/Card'
// ../ itu keluar satufolder, ./ berada di satu folder

const App = () => {

  const callMyName = () => {
    return "Fanny"
  }

  return (
    <View>
      <View style={styles.container}>
        <StatusBar backgroundColor={'pink'} />
        <Text>Hallo nama saya {callMyName()}</Text>
        <Card />
      </View>

      <View>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>

      </View>
    </View>
    
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    height: 220,
    width: 440,
    margin: 10
  }
})