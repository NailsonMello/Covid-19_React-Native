import React, { useState, useEffect } from 'react'
import { View, Picker, Text } from 'react-native'
import api from '../../service/api'
import Category from '../Category/Index'
import Graph from '../Graph/Index'
import styles from './styles'
import moment from 'moment'
import 'moment/locale/pt-br'

export default function CountryWise({ countries, back, txtColor }) {
    const [state, setState] = useState(
        {
            country: 'Brazil',
            confirmed: 0,
            recovered: 0,
            deaths: 0,
            lastUpdate: null,
            active: 0,
            imageURI: '',
            colorTxt: '',
            colorBackground: '',
        }
    )

    useEffect(() => {
        getItems()
    }, [])

    async function getItems(country) {

        if (country === undefined) country = state.country

        const res = await api.get(`countries/${country}`)
        const resConfirmed = await api.get(`countries/${country}/confirmed`)

        var lastupdate = moment(res.data.lastUpdate).locale('pt-br').format('LLLL')

        setState({
            country,
            confirmed: res.data.confirmed.value,
            recovered: res.data.recovered.value,
            deaths: res.data.deaths.value,
            lastUpdate: lastupdate,
            active: resConfirmed.data[0].active,
        })
    }

    const setSelectedValue = item => {
        getItems(item)
    }

    return (
        <View style={[styles.container, { backgroundColor: back !== undefined ? back : '#1bdef7' }]}>
            <View style={styles.picker}>
                <Picker
                    selectedValue={state.country}
                    style={{
                        height: 40,
                        width: '90%',
                    }}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedValue(itemValue)
                    }>
                    {countries.map((country, index) => (
                        <Picker.Item key={index} label={country} value={country} />
                    ))}
                </Picker>
            </View>
            <Category
                confirmed={state.confirmed}
                recovered={state.recovered}
                deaths={state.deaths}
                active={state.active}
            />
            <View style={styles.lastUpdate}>
                <Text style={{ color: txtColor, fontSize: 20, fontWeight: 'bold' }}>
                    Última atualização
             </Text>
                <Text style={[styles.text, { color: txtColor }]}>{state.lastUpdate}</Text>
            </View>

            <Graph
                confirmed={state.confirmed}
                recovered={state.recovered}
                deaths={state.deaths}
                active={state.active}
                colorBackground={back}
            />
        </View>
    )
}
