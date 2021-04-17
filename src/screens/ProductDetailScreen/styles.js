import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white',
    },
    name: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
        margin: 10
    },
    logo: {
        height: 300,
        width: 300,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 10,
    },
    desc: {
        color: 'grey',
        fontSize: 14,
        marginLeft: 20,
        marginRight: 20,
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
})