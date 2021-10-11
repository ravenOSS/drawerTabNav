import { NavigationContainer } from '@react-navigation/native'
import React, { useContext, useEffect, useRef, useState } from 'react'

import { Provider as PaperProvider, useTheme } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import DrawerNavigator from './navigation/DrawerNavigator'
import { useColorScheme } from 'react-native'

import {
	LightTheme,
	DarkTheme,
	ThemeContext,
	getStoredTheme,
	setStoredTheme,
} from './utilities/themeManager'

export default function App() {
	//! This sets the initial app theme to the OS theme
	const [osTheme, setOsTheme] = useState()
	const [savedTheme, setSavedTheme] = useState(null)
	const [appPreference, setAppPreference] = useState('')
	const [appTheme, setAppTheme] = useState('')

	//! On launch of app, detect the OS color
	const colorScheme = useColorScheme()

	useEffect(() => {
		setOsTheme(colorScheme)
		console.log(`osColorScheme: ${colorScheme}`)
	}),
		[]

	//! Get the stored theme preference
	useEffect(() => {
		;async () => {
			const StoredTheme = await getStoredTheme()
			if (StoredTheme) {
				setSavedTheme(StoredTheme)
			}
		}
		console.log(`Stored Theme: ${savedTheme}`) // is this really stored value?
	}),
		[appPreference]

	//! Determine preference of savedTheme or osTheme
	useEffect(() => {
		console.log(`State Saved: ${savedTheme}`)
		console.log(`state osTheme: ${osTheme}`)
		//! nullish coalescing - no savedTheme will return null
		const preference = savedTheme ?? osTheme
		setAppPreference(preference)
		appPreference === 'light' ? setAppTheme(LightTheme) : setAppTheme(DarkTheme)
	})

	useEffect(() => {
		setStoredTheme(appPreference)
	}),
		[appPreference]

	//! After the app is initialized we can toggle the theme
	function toggleTheme() {
		console.log(`Theme changed`)
		setAppPreference(appPreference === 'light' ? 'dark' : 'light')
		console.log(`appPreference: ${appPreference}`)
	}

	// useEffect(() => {
	// 	;async () => {
	// 		await setStoredTheme(appPreference)
	// 	}
	// 	appPreference === light ? setAppTheme(LightTheme) : setAppTheme(DarkTheme)
	// }),
	// 	[appPreference]

	//! Memoize appPreference
	const memo = React.useMemo(
		() => ({
			appPreference,
			toggleTheme,
		}),
		[appPreference, toggleTheme]
	)

	//? 1.When using Chrome debugger, Light will always be returned.
	//? 2.App.json must have "userInterfaceStyle": "automatic" under Expo
	//? plus explicit for ios and android separately

	return (
		<SafeAreaProvider>
			<ThemeContext.Provider value={memo}>
				<PaperProvider theme={appTheme}>
					<NavigationContainer theme={appTheme}>
						<DrawerNavigator />
					</NavigationContainer>
				</PaperProvider>
			</ThemeContext.Provider>
		</SafeAreaProvider>
	)
}
