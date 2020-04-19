import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    catogWide: {
        //backgroundColor: '#fff',
        height: 80,
        padding: 5,
        marginTop: 5,
        paddingTop: 0,
        paddingBottom: 0,
    },
    catogInner: {
        flex: 1,
        marginLeft: 5,
        width: null,
        height: null,
        backgroundColor: 'green',
        padding: 10,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderTopStartRadius: 15,
        borderBottomEndRadius: 15,
        elevation: 10,
    },
    label: {
        color: '#cce5cc',
    },
    data: {
        color: '#fff',
        fontWeight: 'bold',
    },
})