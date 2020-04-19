import React, { useState, useEffect } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import api from '../../service/api'
import styles from './styles'
import Graph from '../Graph/Index'
import Category from '../Category/Index'

import moment from 'moment'
import 'moment/locale/pt-br'

export default function WorldWide() {
    const [state, setState] = useState(
        {
            country: 'Brazil',
            confirmed: 0,
            recovered: 0,
            deaths: 0,
            lastUpdate: null,
            active: 0,
            colorTxt: '',
            colorBackground: '',
        }
    )

    useEffect(() => {
        getItems()
    }, [])

    async function getItems() {
        const background = await AsyncStorage.getItem('backgroundHome')
        const txt = await AsyncStorage.getItem('txtHome')
        const res = await api.get('')
        var lastupdate = moment(res.data.lastUpdate).locale('pt-br').format('LLLL')
        setState({
            confirmed: res.data.confirmed.value,
            recovered: res.data.recovered.value,
            deaths: res.data.deaths.value,
            active:
                res.data.confirmed.value -
                (res.data.recovered.value + res.data.deaths.value),
            lastUpdate: lastupdate,
            colorBackground: background,
            colorTxt: txt
        })
    }

    return (
        <View style={[styles.container, { backgroundColor: state.colorBackground !== undefined ? state.colorBackground : '#1bdef7' }]}>
            <Category
                confirmed={state.confirmed}
                recovered={state.recovered}
                deaths={state.deaths}
                active={state.active}
            />
            <View style={styles.lastUpdate}>
                <Text style={{ color: state.colorTxt, fontSize: 20, fontWeight: 'bold' }}>
                    Última atualização
            </Text>
                <Text style={[styles.text, { color: state.colorTxt }]}>{state.lastUpdate}</Text>
            </View>

            <Graph
                confirmed={state.confirmed}
                recovered={state.recovered}
                deaths={state.deaths}
                active={state.active}
            />
        </View>
    )
}
