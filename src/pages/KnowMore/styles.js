import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        //marginTop: 20,
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#1bdef7',
    },
    card: {
        height: height - 120,
        margin: 20,
        borderRadius: 20,
        shadowColor: "#fff",
        shadowOpacity: 0.7,
        elevation: 8,
    },
    txtKnow: {
        fontSize: 25,
        marginTop: 20,
        textAlign: 'center'
    },
    txtKnowDescription: {
        margin: 10,
        fontSize: 18,
    }
})