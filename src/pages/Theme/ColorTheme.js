import React from 'react'
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    AsyncStorage,
} from 'react-native'
import { CommonActions } from '@react-navigation/native'
import {
    SlidersColorPicker,
    HueSlider,
    SaturationSlider,
    LightnessSlider
} from 'react-native-color'
import tinycolor from 'tinycolor2'

import styles from './styles'

export default class ColorTheme extends React.Component {
    state = {
        modalVisible: false,
        recents: ['#247ba0', '#1bdef7', '#b2dbbf', '#f3ffbd', '#ff1654'],
        color: tinycolor('#1bdef7').toHsl(),
    }

    updateHue = h => this.setState({ color: { ...this.state.color, h } })
    updateSaturation = s => this.setState({ color: { ...this.state.color, s } })
    updateLightness = l => this.setState({ color: { ...this.state.color, l } })

    getColor(colorBack, colorTxt) {
        console.log(this.props.route.params)
        const { screen } = this.props.route.params

        AsyncStorage.setItem(`background${screen}`, colorBack)
        AsyncStorage.setItem(`txt${screen}`, colorTxt)

        setTimeout(() => {
            this.resetStack(screen)
        }, 1000)

    }

    resetStack = (screen) => {
        this.props.navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    {
                        name: screen,
                        params: { txt: 'Feito' },
                    },
                ],
            })
        )
    }
    setCancel() {
        this.props.navigation.navigate('Home')
    }
    render() {
        const overlayTextColor = tinycolor(this.state.color).isDark()
            ? '#FFFFFF'
            : '#000000'

        return (
            <View style={[styles.container, { backgroundColor: tinycolor(this.state.color).toHslString() }]}>
                <View style={styles.hearderContainer}>
                    <TouchableOpacity
                        onPress={() => this.setCancel()}
                    >
                        <Text style={styles.txtHeader}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.getColor(tinycolor(this.state.color).toHslString(), overlayTextColor)}
                    >
                        <Text style={styles.txtHeader}>Salvar</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={[
                        styles.header,
                        { backgroundColor: tinycolor(this.state.color).toHslString() }
                    ]}
                >
                    <Text style={[styles.headerText, { color: overlayTextColor }]}>
                        Cor da fonte
                    </Text>
                </View>
                <ScrollView contentContainerStyle={styles.content}>
                    <HueSlider
                        style={styles.sliderRow}
                        gradientSteps={40}
                        value={this.state.color.h}
                        onValueChange={this.updateHue}
                    />
                    <SaturationSlider
                        style={styles.sliderRow}
                        gradientSteps={20}
                        value={this.state.color.s}
                        color={this.state.color}
                        onValueChange={this.updateSaturation}
                    />
                    <LightnessSlider
                        style={styles.sliderRow}
                        gradientSteps={20}
                        value={this.state.color.l}
                        color={this.state.color}
                        onValueChange={this.updateLightness}
                    />

                    <SlidersColorPicker
                        visible={this.state.modalVisible}
                        color={this.state.color}
                        returnMode={'hex'}
                        onCancel={() => this.setState({ modalVisible: false })}
                        onOk={colorHex => {
                            this.setState({
                                modalVisible: false,
                                color: tinycolor(colorHex).toHsl()
                            })
                            this.setState({
                                recents: [
                                    colorHex,
                                    ...this.state.recents.filter(c => c !== colorHex).slice(0, 4)
                                ]
                            })
                        }}
                        swatches={this.state.recents}
                        swatchesLabel="RECENTS"
                        okLabel="Done"
                        cancelLabel="Cancel"
                    />
                </ScrollView>
            </View>
        )
    }
}
