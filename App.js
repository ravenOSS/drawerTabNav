import { NavigationContainer } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { Appearance, useColorScheme } from 'react-native'
// import * as React from 'react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import DrawerNavigator from './navigation/DrawerNavigator'

const theme = {
	...DefaultTheme,
	roundness: 2,
	colors: {
		...DefaultTheme.colors,
		// primary: '#fb8c00',
		// accent: 'grey100',
		background: 'rgba(76, 175, 80, 0.3)',
	},
}

export default function App() {
	return (
		<SafeAreaProvider>
			<PaperProvider theme={theme}>
				<NavigationContainer>
					<DrawerNavigator />
				</NavigationContainer>
			</PaperProvider>
		</SafeAreaProvider>
	)
}
