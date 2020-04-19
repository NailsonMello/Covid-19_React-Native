import React, { useState, useEffect } from 'react'
import { View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import covid from '../../service/data'
import styles from './styles'
import { MaterialCommunityIcons } from 'react-native-vector-icons'

export default function KnowMore() {
    const [state, setState] = useState(
        {
            title: '',
            description: '',
        }
    )
    const navigation = useNavigation()
    const route = useRoute()

    const id = route.params.id
    const txtColor = route.params.txtColor
    const backgroundColor = route.params.backgroundColor

    const navigateBack = () => {
        navigation.goBack()
    }

    useEffect(() => {
        const data = covid.filter(item => item.id === id)
        console.log(data[0])
        setState({
            title: data[0].title,
            description: data[0].description,
        })
    }, [])
    return (
        <View style={[styles.container, { backgroundColor: backgroundColor !== undefined ? backgroundColor : '#1bdef7' }]}>
            <StatusBar backgroundColor={backgroundColor !== undefined ? backgroundColor : '#1bdef7'} barStyle={txtColor !== '#FFFFFF' ? "dark-content" : "light-content"} />
            <TouchableOpacity
            onPress={()=> navigateBack()}
            >
                <MaterialCommunityIcons name="arrow-left" size={30} style={{ marginLeft: 10, marginTop: -10, color: txtColor !== undefined ? txtColor : '#000' }} />
            </TouchableOpacity>
            <View style={[styles.card, { backgroundColor: txtColor !== undefined ? txtColor : '#000' }]}>
                <Text style={[styles.txtKnow, { color: backgroundColor }]}>{state.title}</Text>
                <ScrollView style={{ flex: 1, marginBottom: 10 }}>
                    <Text style={[styles.txtKnowDescription, { color: backgroundColor }]}>{state.description}</Text>
                </ScrollView>
            </View>
        </View>
    )
}
