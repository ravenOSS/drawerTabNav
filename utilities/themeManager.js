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
	isDark: 'off',
	toggleTheme: () => {},
})

//! Get a value for dark mode
async function getStored(key) {
	try {
		const pref = await AsyncStorage.getItem(key)
		console.log(`pref: ${pref}`)
		return JSON.parse(pref)
	} catch (error) {
		console.error(`getStoredItem failed ${error}`)
	}
}
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

//! Set a value (light/dark)
//! asyncStorage will return null but not accept
//! null or undefined
async function setStored(key, value) {
	console.log(`received theme: ${value}`)
	try {
		await AsyncStorage.setItem(key, JSON.stringify(value))
	} catch (error) {
		console.error(`SetStoredTheme failed ${error}`)
	}
}

async function clearStore() {
	let keys = []
	try {
		keys = await AsyncStorage.getAllKeys()
		console.log(`Keys: ${keys}`)

		await AsyncStorage.multiRemove(keys)
	} catch (error) {
		console.error(`Did not clear data: {error}`)
	}
}
export { clearStore, getStored, setStored }

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

// 	//? When using Chrome debugger, Light will always be returned.
// 	//? App.json must have "userInterfaceStyle": "automatic" under Expo
