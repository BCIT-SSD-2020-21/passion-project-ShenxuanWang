import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    root :{
        backgroundColor:'white',
        minHeight: 1000
    },
    logo: {
        width: 150, 
        height: 150
    },
    name: {
        height: 250,
        fontSize: 24,
        fontWeight: 'bold',
    },
    heading: {
        color: '#b38df7',
        fontSize: 26,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#b38df7'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    para: {
        fontSize: 14,
        margin: 10,
        marginLeft: 20
    }
})