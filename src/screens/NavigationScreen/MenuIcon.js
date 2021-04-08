import React, { useCallback } from 'react'
import { EvilIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DrawerActions, useNavigation } from '@react-navigation/native'

export default function MenuIcon() {
    const navigation = useNavigation();
    const toggleDrawer = useCallback(() => {
        navigation.dispatch(DrawerActions.toggleDrawer())
    },[]);

    return(
        <TouchableOpacity onPress={toggleDrawer}>
        <EvilIcons name = 'navicon' size={35} color='#b38df7' style={{marginRight: 30, marginLeft: 15}} />
        </TouchableOpacity>
    )
}