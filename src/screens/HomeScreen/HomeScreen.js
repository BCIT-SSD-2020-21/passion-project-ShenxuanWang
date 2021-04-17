import React from 'react'
import {Text , Image, View} from 'react-native'
import styles from './styles';
import Logo from '../../../assets/logo.png'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeScreen({navigation}) {
    const Logo_Image = Image.resolveAssetSource(Logo).uri;

    return (
        <View style={styles.root}>
            <Text style={styles.name}>
                <View style={{height:150, flex:1, flexDirection:'row'}}>
                <Image source={{uri: Logo_Image}} style={styles.logo} />
                <Text style={styles.name}>PUDIBAO MEOW</Text>
                </View>               
            </Text>
            <Text style={styles.heading}>Welcome Shopping Here</Text>
            <Text style={styles.title}>Shipping Information</Text>
            <Text style={styles.para}>FREE SHIPPING AREA on order over $50: Richmond, Vancouver, Downtown</Text>
            <Text style={styles.para}>FREE SHIPPING AREA on order over $80: Burnaby, Metrotown, Surrey</Text>
            <Text style={styles.para}>FREE SHIPPING AREA on order over $120: SFU, UBC, Colquitlam, North Vancouver, Westminster</Text>
            <Text style={styles.para}>Additional shipping fee of $5 will be charged if not meet the minimum purchase amount</Text>
            <Text style={styles.title}>Products</Text>
            <TouchableOpacity style={styles.box}
                onPress={() => {
                    navigation.navigate('Categories')
                }}
            >
                <Text style={styles.product}>Click to See Detail Categories</Text>
            </TouchableOpacity>
        </View>
    );
}
