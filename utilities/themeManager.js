import AsyncStorage from '@react-native-async-storage/async-storage'
import {
	DarkTheme as NavigationDarkTheme,
	DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native'
import React from 'react'
import { useColorScheme, useFocusEffect } from 'react-native'
import {
	DarkTheme as PaperDarkTheme,
	DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper'

export const CombinedDefaultTheme = {
	...PaperDefaultTheme,
	...NavigationDefaultTheme,
	colors: {
		...PaperDefaultTheme.colors,
		...NavigationDefaultTheme.colors,
		background: 'rgba(76, 175, 80, 0.3)',
	},
}
export const CombinedDarkTheme = {
	...PaperDarkTheme,
	...NavigationDarkTheme,
	colors: {
		...PaperDarkTheme.colors,
		...NavigationDarkTheme.colors,
		background: '#c62828',
	},
}

//! Create context with default value

export const ThemeContext = React.createContext({
	appTheme: 'light',
	userTheme: 'light',
	toggleTheme: () => {},
})

const clearStore = async () => {
	let keys = []
	try {
		keys = await AsyncStorage.getAllKeys()
		console.log(`Keys: ${keys}`)

		await AsyncStorage.multiRemove(keys)
	} catch (e) {
		console.error(`Did not clear data: {e}`)
	}
}

const getThemePref = async () => {
	try {
		return await AsyncStorage.getItem('ThemePref')
	} catch (e) {
		console.log(`Theming did not get category: ${e}`)
	}
	console.log(`Complete`)
}

const setThemePref = async (theme) => {
	try {
		await AsyncStorage.setItem('ThemePref', theme)
	} catch (e) {
		console.log(`Theming did not set pref category: {e}`)
	}
}

export { clearStore, getThemePref, setThemePref }

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
