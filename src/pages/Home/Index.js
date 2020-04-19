import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StatusBar,
    Dimensions,
    Image,
    TouchableOpacity,
    ScrollView,
    AsyncStorage,
    FlatList,
} from 'react-native'
import {
    BallIndicator,
} from 'react-native-indicators'
import { Entypo, MaterialCommunityIcons } from 'react-native-vector-icons'
import { useNavigation } from '@react-navigation/native'
import api from '../../service/api'
import covid from '../../service/data'
import Category from '../../components/Category/Index'

import styles from './styles'

const { width, height } = Dimensions.get('window')

export default function Index() {
    const [state, setState] = useState(
        {
            confirmed: 0,
            recovered: 0,
            deaths: 0,
            active: 0,
            colorTxt: '',
            colorBackground: '',
            title: '',
            description: '',
            loading: false
        }
    )
    const navigation = useNavigation()

    useEffect(() => {
        setState({ loading: true })
        covid.map(item => {

        })

        loadDataPais()
    }, [])

    async function loadDataPais() {
        const background = await AsyncStorage.getItem('backgroundHome')
        const txt = await AsyncStorage.getItem('txtHome')

        const res = await api.get('countries/Brazil/')
        const resActive = await api.get('countries/Brazil/confirmed')

        setState({
            colorBackground: background,
            colorTxt: txt,
            confirmed: res.data.confirmed.value,
            recovered: res.data.recovered.value,
            deaths: res.data.deaths.value,
            active: resActive.data[0].active,
            loading: false,
        })
    }

    const WorldWide = () => {
        navigation.navigate('WorldWide')
    }
    const CountryWise = () => {
        navigation.navigate('CountryWise')
    }
    const openModal = id => {
        console.log('teste', id)
        navigation.navigate('KnowMore', {
            id,
            txtColor: state.colorTxt,
            backgroundColor: state.colorBackground
        })
    }
    return (
        <ScrollView style={[styles.container, { backgroundColor: state.colorBackground !== undefined ? state.colorBackground : '#1bdef7' }]}>
            <StatusBar backgroundColor={state.colorTxt !== undefined ? state.colorTxt : '#1bdef7'} barStyle={state.colorTxt === '#FFFFFF' ? "dark-content" : "light-content"} />
            <View style={[styles.upperContainer, { backgroundColor: state.colorTxt }]}>
                <View style={styles.header}>
                    <Text style={[styles.heading, { color: state.colorBackground !== undefined ? state.colorBackground : '#000' }]}>
                        Dados COVID-19
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ColorTheme', { screen: 'Home' })}
                        style={[styles.logo, { backgroundColor: state.colorBackground !== undefined ? state.colorBackground : '#000' }]}
                    >
                        <MaterialCommunityIcons name="format-color-fill" size={40} style={{ marginTop: 6, color: state.colorTxt !== undefined ? state.colorTxt : '#000' }} />
                    </TouchableOpacity>
                </View>
                <Text
                    style={{
                        color: state.colorBackground !== undefined ? state.colorBackground : '#000',
                        fontSize: 22,
                        marginLeft: 10,
                        fontWeight: 'bold',
                    }}>
                    Brazil
                </Text>
                <Category
                    confirmed={state.confirmed}
                    recovered={state.recovered}
                    deaths={state.deaths}
                    active={state.active}
                />

                <View style={styles.navigator}>
                    <View style={styles.card}>
                        <TouchableOpacity
                            style={[styles.btn, { backgroundColor: state.colorBackground !== undefined ? state.colorBackground : '#1bdef7' }]}
                            onPress={() => WorldWide()}>
                            <Entypo name="globe" size={20} style={[styles.btnText, { color: state.colorTxt }]} />
                            <Text style={[styles.btnText, { color: state.colorTxt }]}>Dados mundial</Text>
                        </TouchableOpacity>
                        <View opacity={0.4} style={[styles.btn1, { backgroundColor: state.colorBackground !== undefined ? state.colorBackground : '#1bdef7' }]}>

                        </View>
                        <View style={styles.btn2}>

                        </View>
                    </View>
                    <View style={styles.card}>
                        <TouchableOpacity
                            style={[styles.btn, { backgroundColor: state.colorBackground !== undefined ? state.colorBackground : '#1bdef7' }]}
                            onPress={() => CountryWise()}>
                            <MaterialCommunityIcons name="flag" size={20} style={[styles.btnText, { color: state.colorTxt }]} />
                            <Text style={[styles.btnText, { color: state.colorTxt }]}>Dados do País</Text>
                        </TouchableOpacity>
                        <View opacity={0.4} style={[styles.btn1, { backgroundColor: state.colorBackground !== undefined ? state.colorBackground : '#1bdef7' }]}>

                        </View>
                        <View style={styles.btn2}>

                        </View>
                    </View>
                </View>
                <Image
                    source={require('../../assets/bg-new.png')}
                    style={{ height: 250, width: width, resizeMode: 'contain', marginTop: 40 }}
                />
            </View>
            <Text style={[styles.sobre, {color: state.colorTxt !== undefined ? state.colorTxt : '#fff'}]}>Sobre a doença</Text>
            <FlatList
                data={covid}
                keyExtractor={covid => String(covid.id)}
                showsVerticalScrollIndicator={false}
                style={styles.itemCovid}
                renderItem={({ item: covid }) => (
                    <View style={[styles.covidItem, {
                        borderRadius: 15, backgroundColor: state.colorTxt !== undefined ? state.colorTxt : '#fff'
                    }]}>
                        <View style={{
                            backgroundColor: state.colorBackground,
                            width: 20,
                            height: 20,
                            borderColor: state.colorTxt,
                            borderWidth: 2,
                            borderRadius: 50,
                            top: -10,
                            left: -10,
                            position: 'absolute'
                        }}></View>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text style={[styles.covidTitle, { color: state.colorBackground }]}>{covid.title}</Text>
                            <TouchableOpacity
                            onPress={()=> openModal(covid.id)}
                            >
                                <MaterialCommunityIcons name="chevron-double-right" size={30} style={{ marginTop: 6, marginRight: 10, color: state.colorBackground !== undefined ? state.colorBackground : '#000' }} />
                            </TouchableOpacity>
                        </View>
                        <Text numberOfLines={4} style={[styles.description, { color: state.colorBackground }]}>
                            {covid.description}
                        </Text>
                    </View>
                )}
            />
            {state.loading && <BallIndicator color='#fff' size={40} style={styles.loading} />}
        </ScrollView>
    )
}
