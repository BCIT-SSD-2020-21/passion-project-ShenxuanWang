import React from 'react'
import {Text , Image, View} from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen';
import styles from './styles';
import Logo from '../../../assets/logo.png'

export default function HomeScreen() {
    const Logo_Image = Image.resolveAssetSource(Logo).uri;

    return (
        <View style={styles.root}>
            <Text style={styles.name}>
                <Image source={{uri: Logo_Image}} style={styles.logo} />
                PUDIBAO MEOW
            </Text>
            <Text style={styles.heading}>Welcome Shopping Here</Text>
            <Text style={styles.title}>Shipping Information</Text>
            <Text style={styles.para}>FREE SHIPPING AREA on order over $50: Richmond, Vancouver, Downtown</Text>
            <Text style={styles.para}>FREE SHIPPING AREA on order over $80: Burnaby, Metrotown, Surrey</Text>
            <Text style={styles.para}>FREE SHIPPING AREA on order over $120: SFU, UBC, Colquitlam, North Vancouver, Westminster</Text>
            <Text style={styles.para}>Additional shipping fee of $5 will be charged if not meet the minimum purchase amount</Text>
            <Text style={styles.title}>Products</Text>
        </View>
    );
}
