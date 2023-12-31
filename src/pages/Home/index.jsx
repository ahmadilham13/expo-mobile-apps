import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {ImageHeader, Logo} from '../../assets/images'
import { ButtonIcon, PesananAktif, Saldo } from '../../components'
import { WARNA_ABU_ABU } from '../../utils/constans'

const Home = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={ImageHeader} style={styles.header}>
          <Image source={Logo} style={styles.logo}/>
          <View style={styles.hello}>
            <Text style={styles.selamat}>Selamat Datang,</Text>
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
        <View style={styles.pesananAktif}>
          <Text style={styles.label}>Pesanan Aktif</Text>
          <PesananAktif title="Pesanan No. 0002142" status="Sudah Selesai" />
          <PesananAktif title="Pesanan No. 0002142" status="Masih Dicuci" />
          <PesananAktif title="Pesanan No. 0002142" status="Sudah Selesai" />
          <PesananAktif title="Pesanan No. 0002142" status="Masih Dicuci" />
        </View>
      </ScrollView>
    </View>
  )
}

export default Home

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    width: windowWidth,
    height: windowHeight*0.30,
    paddingHorizontal: 30,
    paddingTop: 10
  },
  logo: {
    width: windowWidth*0.26,
    height: windowHeight*0.06,
  },
  hello: {
    marginTop: windowWidth*0.025,
  },
  selamat: {
    fontSize: 15,
  },
  username: {
    fontSize: 24,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap'
  },
  pesananAktif: {
    paddingTop: 10,
    paddingHorizontal: 30,
    backgroundColor: WARNA_ABU_ABU,
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  }
})