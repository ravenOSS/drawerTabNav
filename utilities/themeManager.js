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

export const LightTheme = {
	...PaperDefaultTheme,
	...NavigationDefaultTheme,
	colors: {
		...PaperDefaultTheme.colors,
		...NavigationDefaultTheme.colors,
		background: 'rgba(76, 175, 80, 0.3)',
	},
}
export const DarkTheme = {
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
	appPreference: '',
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

//! Get a value for the storedTheme
const getStoredTheme = async () => {
	try {
		return await AsyncStorage.getItem('ThemePref')
	} catch (e) {
		console.log(`getStoredTheme failed`)
		console.log(e)
	}
	console.log(`Complete`)
}

//! Set a value (light/dark)
//! asyncStorage will return null but not accept
//! null or undefined
const setStoredTheme = async (theme) => {
	console.log(`received theme: ${theme}`)
	try {
		await AsyncStorage.setItem('ThemePref', theme)
	} catch (e) {
		console.log(`SetStoredTheme failed`)
		console.log(e)
	}
}

export { clearStore, getStoredTheme, setStoredTheme }

// export { getAppTheme, getSystemTheme, setAppTheme }

// 	const theme =
// 		systemPreference == 'light' && userPref == 'dark'
// 			? DarkTheme
// 			: systemPreference == 'dark' && userPref == 'light'
// 			? LightTheme
// 			: DarkTheme

// 	console.log(`Constructed theme: ${JSON.stringify(theme)}`)
// 	return theme
// }

// 	//? When using Chrome debugger, Light will always be returned.
// 	//? App.json must have "userInterfaceStyle": "automatic" under Expo
