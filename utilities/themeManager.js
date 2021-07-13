import AsyncStorage from '@react-native-async-storage/async-storage'
import {
	DarkTheme as NavigationDarkTheme,
	DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native'
import React from 'react'
import { useColorScheme } from 'react-native'
import {
	DarkTheme as PaperDarkTheme,
	DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper'

const CombinedDefaultTheme = {
	...PaperDefaultTheme,
	...NavigationDefaultTheme,
	colors: {
		...PaperDefaultTheme.colors,
		...NavigationDefaultTheme.colors,
		background: 'rgba(76, 175, 80, 0.3)',
	},
}
const CombinedDarkTheme = {
	...PaperDarkTheme,
	...NavigationDarkTheme,
	colors: {
		...PaperDarkTheme.colors,
		...NavigationDarkTheme.colors,
		background: '#c62828',
	},
}

//! Create context with default value

export const AppPreferenceContext = React.createContext({
	systemTheme: 'light',
	userTheme: 'dark',
	appTheme: undefined,
	toggleTheme: () => {},
})

// const getSystemTheme = () => {
// 	let systemTheme = useColorScheme() == 'dark' ? 'dark' : 'light'
// 	console.log(systemTheme)
// 	return systemTheme
// }

// const getAppTheme = async () => {
// 	try {
// 		return (storedAppThemeValue = await AsyncStorage.getItem('appThemeSetting'))
// 		// if (storedAppThemeValue !== null) {
// 		// 	setUserPref(storedAppThemeValue)
// 		// 	console.log(`userPref fetched in theming: ${storedAppThemeValue}`)
// 		// }
// 	} catch (e) {
// 		console.log(`Theming did not get category: {e}`)
// 	}
// 	return storedAppThemeValue
// }

// const setAppTheme = async () => {
// 	try {
// 		const storeAppThemeValue = await AsyncStorage.setItem(
// 			'appThemeSetting',
// 			userPref
// 		)
// 		console.log(`userPref written in theming: ${storeAppThemeValue}`)
// 	} catch (e) {
// 		console.log(`Theming did not set pref category: {e}`)
// 	}
// }

// export { getAppTheme, getSystemTheme, setAppTheme }

// 	const theme =
// 		systemPreference == 'light' && userPref == 'dark'
// 			? CombinedDarkTheme
// 			: systemPreference == 'dark' && userPref == 'light'
// 			? CombinedDefaultTheme
// 			: CombinedDarkTheme

// 	console.log(`Constructed theme: ${JSON.stringify(theme)}`)
// 	return theme
// }

// 	//? When using Chrome debugger, Light will always be returned.
// 	//? App.json must have "userInterfaceStyle": "automatic" under Expo
