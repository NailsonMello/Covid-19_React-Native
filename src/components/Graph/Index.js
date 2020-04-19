import React from 'react'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,
} from 'react-native-chart-kit'
import { Text, View, StyleSheet, Dimensions, ScrollView, AsyncStorage } from 'react-native'
import styles from './styles'

const screenWidth = Dimensions.get('window').width
export default function Graph({ confirmed, recovered, deaths, active, colorBackground }) {


    const data = {
        labels: ['Confirmado', 'Recuperado', 'Mortes', 'Ativo'],
        datasets: [
            {
                data: [
                    confirmed,
                    recovered,
                    deaths,
                    active,
                ],
            },
        ],
    }
    const chartConfig = {
        backgroundGradientFrom: '#fff',
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: '#fff',
        color: (opacity = 0.5) => `#62a2f0`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 1.2,
        decimalPlaces: 0,
        fillShadowGradient: '#000',
        fillShadowGradientOpacity: 0.3,
    }

    return (
        <View style={[styles.container, { backgroundColor: colorBackground !== null ? colorBackground : '#1bdef7' }]}>
            <View style={styles.barContainer}>
                <BarChart
                    style={styles.graphStyle}
                    data={data}
                    width={screenWidth - 20}
                    height={250}
                    fromZero={true}
                    // yAxisLabel="$"
                    chartConfig={chartConfig}
                />
            </View>
        </View>
    )
}
