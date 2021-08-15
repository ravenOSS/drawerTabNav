import { NavigationContainer } from '@react-navigation/native'
import React, { useContext, useEffect, useState } from 'react'

import { Provider as PaperProvider, useTheme } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import DrawerNavigator from './navigation/DrawerNavigator'
import { useColorScheme } from 'react-native'

import {
	CombinedDefaultTheme,
	CombinedDarkTheme,
	ThemeContext,
	getThemePref,
	setThemePref,
} from './utilities/themeManager'
import { color } from 'react-native-reanimated'

export default function App() {
	//! On first use of app, set the color scheme to the OS color
	//! After first use, storedThemePref !== null
	//! Unless saved scheme !null
	//! How to read theme from storage and assure value is available
	//! before setting storedTheme?
	let colorScheme = useColorScheme()
	console.log(`colorScheme: ${colorScheme}`)
	const [osTheme, setOsTheme] = useState(colorScheme)
	const [storedTheme, setStoredTheme] = useState(null)

	;(async () => {
		const getStoredTheme = await getThemePref()
		setStoredTheme(getStoredTheme)
		console.log(`retrieved value: ${storedTheme}`) // is this really stored value?
	})()

	//! nullish coalescing
	const selectedPref = storedTheme ?? osTheme
	console.log(`selectedSystemPref: ${selectedPref}`)

	appTheme = selectedPref === 'light' ? CombinedDefaultTheme : CombinedDarkTheme

	//! After the app is initialized we can toggle the userTheme
	function toggleTheme() {
		console.log(`Theme changed`)
		//! Ternary operator is more verbose but its clear what's going on
		//! IF you know ternary operator!
		setStoredTheme(osTheme === 'light' ? 'dark' : 'light')
		//! This log prints previous scheme. Why? useState is async!
	}

	const preferences = React.useMemo(
		() => ({
			appTheme,
			osTheme,
			toggleTheme,
		}),
		[appTheme, osTheme, toggleTheme]
	)

	//? 1.When using Chrome debugger, Light will always be returned.
	//? 2.App.json must have "userInterfaceStyle": "automatic" under Expo

	return (
		<SafeAreaProvider>
			<ThemeContext.Provider value={preferences}>
				<PaperProvider theme={appTheme}>
					<NavigationContainer theme={appTheme}>
						<DrawerNavigator />
					</NavigationContainer>
				</PaperProvider>
			</ThemeContext.Provider>
		</SafeAreaProvider>
	)
}
