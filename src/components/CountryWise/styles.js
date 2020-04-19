import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1bdef7',
    },
    picker: {
        height: 40,
        width: '70%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        borderTopStartRadius: 25,
        borderBottomEndRadius: 25,
        borderWidth: 0.5,
        borderColor: 'gray',
        elevation: 5,
        marginBottom: 15,
    },
    lastUpdate: {
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 20,
    },
    text: {
        color: '#000',
        fontSize: 13,
    },
})