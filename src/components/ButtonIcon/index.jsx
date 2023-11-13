import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {IconAddSaldo, IconGetPoint} from '../../assets'
import { WARNA_SEKUNDER } from '../../utils/constans'

const ButtonIcon = ({title}) => {
    const Icon = () => {
        if(title === 'Add Saldo') return <IconAddSaldo />
        if(title === 'Get Point') return <IconGetPoint />

        return <IconAddSaldo />
    }
  return (
    <TouchableOpacity>
        <View style={styles.icon}>
            <Icon />
            <Text style={styles.text}>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default ButtonIcon

const styles = StyleSheet.create({
    icon: {
        width: 50,
        height: 50,
        backgroundColor: WARNA_SEKUNDER,
        padding: 7,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 7,
        textAlign: 'center'
    }
})