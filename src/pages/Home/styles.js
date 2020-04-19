import { StyleSheet, Dimensions } from 'react-native'
import Constans from 'expo-constants'
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        flex: 1,
        //paddingTop: Constans.statusBarHeight,
    },
    upperContainer: {
        height: height - 250,
        backgroundColor: '#fff',
        borderBottomEndRadius: 50,
        borderBottomStartRadius: 50,
        // padding: 20,
        //paddingTop: Constans.statusBarHeight,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10,
        paddingTop: 10,
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        marginRight: 10,
        borderRadius: 50,
        backgroundColor: 'rgba(51, 205, 255, 0.2)'
    },
    heading: {
        textAlign: 'center',
        color: '#0697c7',
        fontSize: 25,
        marginLeft: 20,
        fontWeight: 'bold',
    },
    navigator: {
        height: '26%',
        width: width - 100,
        // backgroundColor: 'black',
        marginTop: 30,
        alignSelf: 'flex-end',
        // paddingTop: '30%',
    },
    card: {
        alignItems: 'center',
    },
    btn: {
        zIndex: 3,
        width: '80%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginBottom: 40,
        backgroundColor: '#02c7e0',
        borderTopStartRadius: 25,
        borderBottomEndRadius: 25,
        elevation: 8,
        shadowOpacity: 0.1,
        shadowRadius: 50,
        shadowColor: 'rgba(51, 205, 255, 0.2)'
    },
    btn1: {
        position: 'absolute',
        zIndex: 2,
        width: '80%',
        height: 50,
        right: 20,
        marginTop: 5,
        backgroundColor: 'rgba(0, 163, 217, 0.8)',
        borderTopStartRadius: 25,
        borderBottomEndRadius: 25,
        elevation: 8,
        shadowOpacity: 0.9,
        shadowColor: 'rgba(0, 163, 217, 0.2)'
    },
    btn2: {
        position: 'absolute',
        zIndex: 1,
        width: '80%',
        height: 50,
        top: 10,
        right: 24,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderTopStartRadius: 25,
        borderBottomEndRadius: 25,
    },
    btnText: {
        color: '#fff',
        fontSize: 17,
        marginLeft: 10,
    },
    loading: {
        flex: 1,
        width: '100%',
        height: height,
        backgroundColor: 'rgba(0,0,0,0.7)',
        position: 'absolute'
    },
    sobre:{
        marginTop: 220,
        fontSize: 30,
        textAlign: 'center',
        fontWeight:'bold'
    },
    itemCovid: {
        //justifyContent: 'flex-start',
        //flexDirection: 'column',
        marginTop: 10,
        borderRadius: 15,
        marginBottom: 10,
        height: '100%',
    },
    covidItem: {
        height: 120,
        margin: 10,
    },
    covidTitle: {
        marginTop: 5,
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    description: {
        color: '#000',
        margin: 10,
        //fontSize: 15,
        //marginTop: 210,
        //letterSpacing: 1,
    },
})