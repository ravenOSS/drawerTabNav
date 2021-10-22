import AsyncStorage from '@react-native-async-storage/async-storage'
import {
	DarkTheme as NavigationDarkTheme,
	DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native'
import React from 'react'
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
	appTheme: LightTheme,
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
const getStoredTheme = async (key) => {
	try {
		const pref = await AsyncStorage.getItem(key)
		return pref
	} catch (error) {
		console.log(`getStoredItem failed ${error}`)
	}
}

//! Set a value (light/dark)
//! asyncStorage will return null but not accept
//! null or undefined
const setStoredTheme = async (key, value) => {
	console.log(`received theme: ${value}`)
	try {
		await AsyncStorage.setItem(key, value)
	} catch (error) {
		console.log(`SetStoredTheme failed ${error}`)
	}
}

export { clearStore, getStoredTheme, setStoredTheme }

// export default {
// 	async setItem(key, value) {
// 		 try {
// 				return await AsyncStorage.setItem(key, JSON.stringify(value));
// 		 } catch (error) {
// 				// console.error('AsyncStorage#setItem error: ' + error.message);
// 		 }
// 	},
// 	async getItem(key) {
// 		 return await AsyncStorage.getItem(key)
// 				.then((result) => {
// 					 if (result) {
// 							try {
// 								 result = JSON.parse(result);
// 							} catch (e) {
// 								 // console.error('AsyncStorage#getItem error deserializing JSON for key: ' + key, e.message);
// 							}
// 					 }
// 					 return result;
// 				});
// 	},
// 	async removeItem(key) {
// 		 return await AsyncStorage.removeItem(key);
// 	}
// }

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
