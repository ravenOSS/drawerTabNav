import { NavigationContainer } from '@react-navigation/native'
import React, { useContext, useEffect, useState } from 'react'

import { Provider as PaperProvider, useTheme } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import DrawerNavigator from './navigation/DrawerNavigator'
import { useColorScheme } from 'react-native'

import {
	LightTheme,
	DarkTheme,
	ThemeContext,
	getThemePref,
	setThemePref,
} from './utilities/themeManager'

export default function App() {
	const [firstRender, setFirstRender] = useState(true)

	//! On first use of app, set the color scheme to the OS color
	const colorScheme = useColorScheme()

	//! This sets the initial app theme to the OS theme
	const [osTheme, setOSTheme] = useState(colorScheme)
	console.log(`osColorScheme: ${colorScheme}`)

	const [userTheme, setUserTheme] = useState(null)
	const [savedTheme, setSavedTheme] = useState(null)
	// const [appPref, setAppPref] = useState(null)

	//! Get the stored theme preference

	;(async () => {
		const StoredTheme = await getThemePref()
		setSavedTheme(StoredTheme)
		// setFirstRender(false)
		console.log(`retrieved value: ${userTheme}`) // is this really stored value?
	})()

	// useEffect(() => {
	// 	if (firstRender) {
	// 		themePref()
	// 	}
	// }, [userTheme])

	//! nullish coalescing
	const appPref = savedTheme ?? osTheme

	appTheme = appPref === 'light' ? LightTheme : DarkTheme

	//! After the app is initialized we can toggle the theme
	function toggleTheme() {
		console.log(`Theme changed`)
		setUserTheme(userTheme === 'light' ? 'dark' : 'light')
	}

	const preferences = React.useMemo(
		() => ({
			osTheme,
			userTheme,
			toggleTheme,
		}),
		[osTheme, appPref, toggleTheme]
	)

	//? 1.When using Chrome debugger, Light will always be returned.
	//? 2.App.json must have "userInterfaceStyle": "automatic" under Expo
	//? plus explicit for ios and android separately

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
