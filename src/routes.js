import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()

import Home from './pages/Home/Index'
import ColorTheme from './pages/Theme/ColorTheme'
import CountryWise from './pages/CountryWise/Index'
import WorldWide from './pages/WorldWide/Index'
import KnowMore from './pages/KnowMore/Index'

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="ColorTheme" component={ColorTheme} />
                <AppStack.Screen name="CountryWise" component={CountryWise} />
                <AppStack.Screen name="WorldWide" component={WorldWide} />
                <AppStack.Screen name="KnowMore" component={KnowMore} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes