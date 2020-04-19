import { StyleSheet, Platform } from 'react-native'
import Constans from 'expo-constants'


export default StyleSheet.create({
    container: {
        flex: 1,
        //paddingTop: Constans.statusBarHeight,
    },
    header: {
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
        paddingBottom: 16
    },
    hearderContainer: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    txtHeader: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold'
    },
    content: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal: 32,
        paddingBottom: 32
    },
    headerText: {
        marginTop: 24,
        fontSize: 34,
        lineHeight: 41,
        ...Platform.select({
            ios: {
                fontWeight: '700',
                letterSpacing: 0.41
            }
        })
    },
    sectionText: {
        marginTop: 32,
        color: '#222',
        fontSize: 22,
        lineHeight: 28,
        ...Platform.select({
            ios: {
                fontWeight: '600',
                letterSpacing: 0.75
            }
        })
    },
    componentText: {
        marginTop: 16,
        color: '#222',
        fontSize: 16,
        lineHeight: 21,
        ...Platform.select({
            ios: {
                fontWeight: '600',
                letterSpacing: -0.408
            }
        })
    },
    sliderRow: {
        backgroundColor: '#fff',
        alignSelf: 'stretch',
        marginLeft: 12,
        marginTop: 12
    },
})