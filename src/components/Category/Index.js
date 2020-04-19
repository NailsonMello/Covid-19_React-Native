import React from 'react'
import { View, Text, ScrollView, SafeAreaView } from 'react-native'

import styles from './styles'

export default function Category({ confirmed, recovered, deaths, active }) {
    return (
        <SafeAreaView style={styles.catogWide}>
            <ScrollView
                style={{
                    paddingTop: 5,
                    paddingBottom: 5,
                    backgroundColor: 'rgba(0,0,0,0.1)',
                    height: 80
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <View style={{ width: 110, height: 70 }}>
                    <View style={{ flex: 2 }}>
                        <View style={[styles.catogInner, { backgroundColor: '#e59400' }]}>
                            <Text style={styles.label}>Confirmados</Text>
                            <Text style={styles.data}>{confirmed}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ width: 110, height: 70 }}>
                    <View style={{ flex: 2 }}>
                        <View style={[styles.catogInner, { backgroundColor: 'green' }]}>
                            <Text style={styles.label}>Recuperados</Text>
                            <Text style={styles.data}>{recovered}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ width: 110, height: 70 }}>
                    <View style={{ flex: 2 }}>
                        <View style={[styles.catogInner, { backgroundColor: 'red' }]}>
                            <Text style={styles.label}>Mortes</Text>
                            <Text style={styles.data}>{deaths}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ width: 110, height: 70 }}>
                    <View style={{ flex: 2 }}>
                        <View style={[styles.catogInner, { backgroundColor: '#22222d' }]}>
                            <Text style={styles.label}>Ativos</Text>
                            <Text style={styles.data}>{active}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView >
        </SafeAreaView >
    )
}
