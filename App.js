import { NavigationContainer } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { useColorScheme } from 'react-native'
// import * as React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import DrawerNavigator from './navigation/DrawerNavigator'
import { CombinedDefaultTheme, CombinedDarkTheme } from './utilities/Theming'

export default function App() {
	let pref = useColorScheme() == 'dark' ? 'dark' : 'default'
	console.log(`appSetting: ${pref}`)
	let theme =
		useColorScheme() === 'dark' ? CombinedDarkTheme : CombinedDefaultTheme
	console.log(`appPreference: ${JSON.stringify(theme)}`)

	return (
		<SafeAreaProvider>
			<PaperProvider theme={theme}>
				<NavigationContainer theme={theme}>
					<DrawerNavigator />
				</NavigationContainer>
			</PaperProvider>
		</SafeAreaProvider>
	)
}
