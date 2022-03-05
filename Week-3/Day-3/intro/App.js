import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, {useState} from 'react'
import Card from './assets/src/components/Card'
// ../ itu keluar satufolder, ./ berada di satu folder
import RenderSomeScreens from './assets/src/components/RenderSomeScreens'
import Perkenalan from './assets/src/components/Perkenalan'
import Splash from './assets/image/Splash.png'

//kalau export hanya pake export tanpa default, saat import perlu menggunakkan {}, nama harus sama persis
//kalau sudah pake bisa langsung tanpa {}, nama bisa beda

const App = () => {

  //state = data yang hanya bisa di akses oleh component tersebut, keculai dikirimin meallaui props
  const [firstName, setFirstName] = useState("Shobrina")

  const callMyName = () => {
    return "Fanny"
  }

  //component
  //scrollview untuk menscroll item
  //Image -> buat masukingambar
  //freepik, unsplash, -> situs penyedia gambar gratis

  if(firstName ==="Nana"){
    return(
      <View>
        <Text>Render optional</Text>
        <TouchableOpacity onPress={() => {
          setFirstName("Panny")
        }}>
          <Text>GantiNama</Text>
        </TouchableOpacity>
      </View>
    )
  }else{
    return (
      <ScrollView>
        <View style={styles.container}>
          <StatusBar backgroundColor={'pink'} />
          <Text>Hallo nama saya {callMyName()}</Text>
          <Card />
        </View>
  
        {RenderSomeScreens({nama: "Fanny"})} 
        {/* //yang di atas sama kayka gini, paling sering di pake yg bwh */}
        <RenderSomeScreens nama="Shobrina" /> 
  
        {/* yang dibuat, fungsi Perkenalan */}
        <Perkenalan name={firstName} age="21" hobi="main" />
        <Perkenalan name="Fathoniah" age="24" hobi="makan" />
        <Perkenalan name="Fanny" age="12" hobi="tidur" />
  
        {/* penggunaan state */}
        <Text>Haaloo namaku {firstName}</Text>
        <TouchableOpacity onPress={() => {
          setFirstName("Nana")
        }}>
          <Text>GantiNama</Text>
        </TouchableOpacity>
        <Text>Hallo namaku {firstName}</Text>
        {/* usestate dapat merender ulang dg data yg baru, hanya dirender hanya jika ada perubahan dalam probs atau state */}
        
        {/* make image */}
        <Image source={Splash} style={{width: 100, height: 200}} />
        <Image source={{uri: 'https://i.pinimg.com/736x/ee/ef/f5/eeeff56af7e40c8138b8288c7aceba04.jpg'}} style={{width: 140, height: 200}} />
      </ScrollView>
      
    )
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    height: 220,
    width: 440,
    margin: 10
  }
})