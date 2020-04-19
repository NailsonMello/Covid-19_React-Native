import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        //marginTop: 20,
        flex: 1,
        backgroundColor: '#1bdef7',
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        paddingBottom: 10,
        paddingTop: 10,
    },
    logo: {
        height: 55,
        width: 55,
    },
    heading: {
        textAlign: 'center',
        marginTop: 5,
        color: '#0697c7',
        fontSize: 25,
        marginLeft: 10,
        fontWeight: 'bold',
    },
    loading: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.7)',
        position: 'absolute'
    }
})