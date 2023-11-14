import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {ImageHeader, Logo} from '../../assets/images'
import { ButtonIcon, Saldo } from '../../components'

const Home = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ImageHeader} style={styles.header}>
        <Image source={Logo} style={styles.logo}/>
        <View style={styles.hello}>
          <Text style={styles.selamat}>Selamat Datang</Text>
          <Text style={styles.username}>Ahmad Ilham</Text>
        </View>
      </ImageBackground>
      <Saldo />
      <View style={styles.layanan}>
        <Text style={styles.label}>Layanan Kami</Text>
        <View style={styles.iconLayanan}>
          <ButtonIcon title="Kiloan" type="layanan" />
          <ButtonIcon title="Satuan" type="layanan" />
          <ButtonIcon title="VIP" type="layanan" />
          <ButtonIcon title="Karpet" type="layanan" />
          <ButtonIcon title="Setrika Saja" type="layanan" />
          <ButtonIcon title="Express" type="layanan" />
        </View>
      </View>
    </View>
  )
}

export default Home

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  page: {
    flex: 1
  },
  header: {
    width: windowWidth,
    height: windowHeight*0.30,
    paddingHorizontal: 30,
    paddingTop: 10
  },
  logo: {
    width: windowWidth*0.25,
    height: windowHeight*0.06,
  },
  hello: {
    marginTop: windowWidth*0.025,
  },
  selamat: {
    fontSize: 24,
  },
  username: {
    fontSize: 22,
    fontStyle: 'italic'
  },
  layanan: {
    paddingHorizontal: 30,
    paddingTop: 15
  },
  label: {
    fontSize: 18,
    textTransform: 'uppercase'
  },
  iconLayanan: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap'
  }
})