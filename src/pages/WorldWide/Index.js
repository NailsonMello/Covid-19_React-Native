import React, { useState, useEffect } from 'react'
import { View, StatusBar, Text, AsyncStorage } from 'react-native'
import {
    BallIndicator,
} from 'react-native-indicators'
import WorldwideC from '../../components/WorldWide/Index'
import styles from './styles'

export default function WorldWide() {
    const [state, setState] = useState(
        {
            countries: [],
            colorTxt: '',
            colorBackground: '',
            loading: false
        }
    )

    useEffect(() => {
        setState({loading: true})
        getColor()
    }, [])

    async function getColor() {
        const background = await AsyncStorage.getItem('backgroundHome')
        const txt = await AsyncStorage.getItem('txtHome')

        setState({
            colorBackground: background,
            colorTxt: txt,
            loading: false
        })
    }
    return (
        <View style={[styles.container, { backgroundColor: state.colorBackground !== undefined ? state.colorBackground : '#1bdef7' }]}>
            <StatusBar backgroundColor={state.colorBackground !== undefined ? state.colorBackground : '#1bdef7'} barStyle={state.colorTxt !== '#FFFFFF' ? "dark-content" : "light-content"} />
            <View style={styles.header}>
                <Text style={[styles.heading, { color: state.colorTxt }]}>Dados mundial</Text>
            </View>
            <WorldwideC /> 
            {state.loading && <BallIndicator color='#fff' size={40} style={styles.loading} />}
        </View>
    )
}
