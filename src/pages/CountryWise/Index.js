import React, { useState, useEffect } from 'react'
import { View, Picker, Text, StatusBar, AsyncStorage } from 'react-native'
import api from '../../service/api'
import CountryWiseC from '../../components/CountryWise/Index'
import {
    BallIndicator,
} from 'react-native-indicators'
import styles from './styles'

export default function CountryWise() {
    const [state, setState] = useState(
        {
            countries: [],
            colorTxt: '',
            colorBackground: '',
            loading: false
        }
    )

    useEffect(() => {
        setState({ loading: true })
        getItems()
    }, [])


    async function getItems() {
        const background = await AsyncStorage.getItem('backgroundHome')
        const txt = await AsyncStorage.getItem('txtHome')

        const res = await api.get(`countries`)
        var items = []
        for (var i = 0; i < res.data.countries.length; i++) {
            items.push(res.data.countries[i].name);
        }
        setState({
            countries: items,
            colorBackground: background,
            colorTxt: txt,
            loading: false,
        })
    }

    return (
        <View style={[styles.container, { backgroundColor: state.colorBackground !== undefined ? state.colorBackground : '#1bdef7' }]}>
            <StatusBar backgroundColor={state.colorBackground !== undefined ? state.colorBackground : '#1bdef7'} barStyle={state.colorTxt !== '#FFFFFF' ? "dark-content" : "light-content"} />
            <View style={styles.header}>
                <Text style={[styles.heading, { color: state.colorTxt }]}>Dados país</Text>
            </View>
            <CountryWiseC countries={state.countries !== undefined ? state.countries : []} back={state.colorBackground} txtColor={state.colorTxt} />
            {state.loading && <BallIndicator color='#fff' size={40} style={styles.loading} />}
        </View>
    );
}
