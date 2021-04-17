import { Platform, StyleSheet } from 'react-native';

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
        height: 150,
        fontSize: 24,
        fontWeight: 'bold',
        textAlignVertical: 'center',
        marginTop: 10,
        marginBottom: 30,
        ...Platform.select({
            ios: {
                lineHeight: 140
            },
            android: {}
        })
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
        margin: 5,
        marginLeft: 20
    },
    product: {
        width: 200,
        fontSize: 16,
        borderWidth: 1,
        textAlign: 'center'
    },
    box: {
        alignItems: 'center'
    }
})