import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react'
import {IconAddSaldo, IconGetPoint, IconExpress, IconKarpet, IconKiloan, IconSatuan, IconSetrika, IconVip} from '../../assets'
import { WARNA_SEKUNDER } from '../../utils/constans'

const ButtonIcon = ({title, type}) => {
    const Icon = () => {
        if(title === 'Add Saldo') return <IconAddSaldo />
        if(title === 'Get Point') return <IconGetPoint />
        if(title === 'Kiloan') return <IconKiloan />
        if(title === 'Satuan') return <IconSatuan />
        if(title === 'VIP') return <IconVip />
        if(title === 'Karpet') return <IconKarpet />
        if(title === 'Setrika Saja') return <IconSetrika />
        if(title === 'Express') return <IconExpress />

        return <IconAddSaldo />
    }
  return (
    <TouchableOpacity style={styles.container(type)}>
        <View style={styles.icon(type)}>
            <Icon />
            <Text style={styles.text(type)}>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default ButtonIcon

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: (type) => ({
        // marginTop: 10,
        marginBottom: type === 'layanan' ? 12 : 0,
        marginRight: type === 'layanan' ? 0 : 0
    }),
    icon: (type) => ({
        width: type === 'layanan' ? (windowWidth/4) : 50,
        height: type === 'layanan' ? (windowHeight/9) : 50,
        backgroundColor: WARNA_SEKUNDER,
        padding: type === 'layanan' ? 0 : 7,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }),
    text: (type) => ({
        fontSize: type === 'layanan' ? 10 : 7,
        marginTop: type === 'layanan' ? 10 : 0,
        textAlign: 'center'
    }),
})