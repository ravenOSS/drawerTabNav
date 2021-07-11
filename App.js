import { NavigationContainer } from '@react-navigation/native'
import React, { useContext, useEffect, useState } from 'react'

import { Provider as PaperProvider, useTheme } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import DrawerNavigator from './navigation/DrawerNavigator'
import { useColorScheme } from 'react-native'

import {
	CombinedDefaultTheme,
	CombinedDarkTheme,
	AppPreferenceContext,
} from './utilities/themeManager'

export default function App() {
	const colorScheme = useColorScheme()

	const [systemTheme, setSystemTheme] = React.useState(
		colorScheme === 'dark' ? 'dark' : 'light'
	)
	const [userTheme, setUserTheme] = React.useState('light')

	function toggleTheme() {
		console.log(`Theme changed`)
		setUserTheme((userTheme) => (userTheme === 'light' ? 'dark' : 'light'))
	}

	const appTheme =
		systemTheme === 'light' && userTheme === 'dark'
			? CombinedDarkTheme
			: systemTheme === 'dark' && userTheme === 'light'
			? CombinedDefaultTheme
			: CombinedDarkTheme

	const preferences = React.useMemo(
		() => ({
			appTheme,
			systemTheme,
			toggleTheme,
		}),
		[appTheme, systemTheme, toggleTheme]
	)

	//? 1.When using Chrome debugger, Light will always be returned.
	//? 2.App.json must have "userInterfaceStyle": "automatic" under Expo

	return (
		<SafeAreaProvider>
			<AppPreferenceContext.Provider value={preferences}>
				<PaperProvider theme={appTheme}>
					<NavigationContainer theme={appTheme}>
						<DrawerNavigator />
					</NavigationContainer>
				</PaperProvider>
			</AppPreferenceContext.Provider>
		</SafeAreaProvider>
	)
}
