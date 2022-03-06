import { StyleSheet, Text, View , ImageBackground, Dimensions, Image } from 'react-native'
import React from 'react'
import { Banner, Background, Profile, Kotak, IconTruck, IconBox, IconKey, IconCamera } from './src/assets/image/index'

const Home = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={Background} style={styles.header}>
        <Text style={styles.textNama}>Hi, Nama</Text>
        
        <View style={styles.headerContent}>
          <Text style={styles.textLocation}>Your Location</Text>
          <Image source={Profile} style={styles.profile} />
        </View>
        
        <Image source={Banner} style={styles.banner} />
      </ImageBackground>

      <View style={styles.menuAll}>
        <View style={styles.menuSet}>
          <ImageBackground source={Kotak} style={styles.menu}>
            <Image source={IconTruck} style={styles.icon} />
          </ImageBackground>
          <Text style={styles.menuName}>Sewa Mobil</Text>
        </View>
        <View style={styles.menuSet}>
          <ImageBackground source={Kotak} style={styles.menu}>
            <Image source={IconBox} style={styles.icon} />
          </ImageBackground>
          <Text style={styles.menuName}>Oleh-Oleh</Text>
        </View>
        <View style={styles.menuSet}>
          <ImageBackground source={Kotak} style={styles.menu}>
            <Image source={IconKey} style={styles.icon} />
          </ImageBackground>
          <Text style={styles.menuName}>Penginapan</Text>
        </View>
        <View style={styles.menuSet}>
          <ImageBackground source={Kotak} style={styles.menu}>
            <Image source={IconCamera} style={styles.icon} />
          </ImageBackground>
          <Text style={styles.menuName}>Wisata</Text>
        </View>
      </View>
      
      <View style={styles.listPage}>
        <Text style={styles.textJudul}>Daftar Mobil Pilihan</Text>
      </View>
    </View>
  )
}

export default Home

const windowsWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  page: {
    flex: 1
  },
  header: {
    width: windowsWidth,
    height: 176
  },
  profile:{
    marginStart: 240
  },
  banner:{
    width: 328,
    height: 140,
    marginTop: 10,
    marginLeft: 33
  },
  headerContent: {
    flexDirection: 'row'
  },
  textNama: {
    fontSize: 12,
    marginTop: 46,
    marginStart: 16,
    color: '#000000'
  },
  textLocation: {
    fontSize: 14,
    color: '#000000',
    marginStart: 16,
    fontWeight: 'bold'
  },
  menuAll: {
    marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  menu: {
    height: 56,
    width: 56,
    alignItems: 'center',
    justifyContent:'center'
  },
  icon: {
    width: 24,
    height: 24,
  },
  menuName: {
    fontSize: 12
  },
  menuSet: {
    alignItems: 'center',
    justifyContent:'center'
  },
  listPage: {
    marginTop: 25,
    marginStart: 16
  },
  textJudul: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
  }
  
})