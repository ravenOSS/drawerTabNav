import { NavigationContainer } from '@react-navigation/native'
import React, { useCallback, useEffect, useState } from 'react'

import { Provider as PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import DrawerNavigator from './navigation/DrawerNavigator'
// import { AppearanceProvider, useColorScheme } from 'react-native-appearance'

import {
	LightTheme,
	DarkTheme,
	ThemeContext,
	getStored,
	setStored,
} from './utilities/themeManager'

export default function App() {
	const [isDark, setIsDark] = useState('off')

	const [appTheme, setAppTheme] = useState()

	// mode is the key for async-storage
	useEffect(() => {
		getStored('mode').then((setting) => {
			setting !== null ? setIsDark(setting) : setIsDark('off')
		})
	}, [])

	useEffect(() => {
		isDark === 'on' ? setAppTheme(DarkTheme) : setAppTheme(LightTheme)
	}, [isDark])

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const toggleTheme = () => {
		console.log(`Theme changed`)
		isDark === 'on' ? setIsDark('off') : setIsDark('on')
	}

	useEffect(() => {
		setStored('mode', isDark)
		console.log(`Stored theme ${isDark}`)
	}, [isDark])

	const memo = React.useMemo(
		() => ({
			isDark,
			toggleTheme,
		}),
		[isDark, toggleTheme]
	)

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
// const [osTheme, setOsTheme] = useState('') // light - dark
// const [savedTheme, setSavedTheme] = useState('light') // light - dark
// const [appPreference, setAppPreference] = useState('light') // light - dark
// //! Note that useColorScheme hook cannot be used in useEffect
// let colorScheme = useColorScheme()
// console.log(`osTheme: ${osTheme}`)
// useEffect(() => {
// 	setOsTheme(colorScheme)
// }, [colorScheme])

// //! Get the stored theme preference
// useEffect(() => {
// 	const stored = getStored('themePref')
// 	setSavedTheme(stored)
// }, [])

// //! Determine preference of savedTheme or osTheme
// useEffect(() => {
// 	//! nullish coalescing - no savedTheme will return null
// 	let selected = savedTheme ?? osTheme
// 	setAppPreference(selected)
// }, [osTheme, savedTheme])

// //! Set the appTheme to be passed to components
// useEffect(() => {
// 	appPreference === 'light' ? setAppTheme(LightTheme) : setAppTheme(DarkTheme)
// }, [appPreference])

//! After the app is initialized we can toggle the theme

// useEffect(() => {
// 	setStoredTheme('themePref', appPreference)
// }, [appPreference])

// useEffect(() => {
// 	console.log(`osTheme: ${osTheme}`)
// 	console.log(`state savedTheme: ${savedTheme}`)
// 	console.log(`state appPreference: ${appPreference}`)
// 	// console.log(`state savedTheme: ${JSON.stringify(savedTheme)}`)
// 	// console.log(`state appPreference: ${JSON.stringify(appPreference)}`)
// 	return () => {}
// }, [appPreference, osTheme, savedTheme])

//! Memoize appPreference

// const memo = React.useMemo(
// 	() => ({
// 		appPreference,
// 		toggleTheme,
// 	}),
// 	[appPreference, toggleTheme]
// )
//? 1.When using Chrome debugger, Light will always be returned.
//? 2.App.json must have "userInterfaceStyle": "automatic" under Expo
//? plus explicit for ios and android separately
