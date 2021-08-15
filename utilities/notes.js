//! IIFE
useEffect(() => {
	;(async () => {
		try {
			const storedAppThemeValue = await AsyncStorage.getItem('appThemeSetting')
			if (storedAppThemeValue !== null) {
				setUserPref(storedAppThemeValue)
				console.log(`userPref fetched in theming: ${storedAppThemeValue}`)
			}
		} catch (e) {
			console.log(`Theming did not get category: {e}`)
		}
	})()
}, [])

//! Declare function within useEffect() hook
//! Call function outside of hook and avoid errors
//! useEffect must return cleanup function or nothing

const Theming = () => {
	const [userPref, setUserPref] = useState('')

	let systemPreference = useColorScheme() == 'dark' ? 'dark' : 'light'
	console.log(`Theming systemPreference: ${systemPreference}`)

	useEffect(() => {
		const getAppTheme = async () => {
			try {
				const storedAppThemeValue = await AsyncStorage.getItem(
					'appThemeSetting'
				)
				if (storedAppThemeValue !== null) {
					setUserPref(storedAppThemeValue)
					console.log(`userPref fetched in theming: ${storedAppThemeValue}`)
				}
			} catch (e) {
				console.log(`Theming did not get category: {e}`)
			}
			getAppTheme()
		}
	}, [])
}

function App() {
	const [data, setData] = useState({ hits: [] })

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(
				'https://hn.algolia.com/api/v1/search?query=redux'
			)

			setData(result.data)
		}

		fetchData()
	}, [])

	return (
		<ul>
			{data.hits.map((item) => (
				<li key={item.objectID}>
					<a href={item.url}>{item.title}</a>
				</li>
			))}
		</ul>
	)
}
// // }, [systemPreference, userPref])
//! Clear all keys from AsyncStorage
// useFocusEffect(
// 	React.useCallback(() => {
// 		let keys = []
// 		;(async () => {
// 			try {
// keys = await AsyncStorage.getAllKeys()
// 				console.log(`Keys: ${keys}`)

// 				await AsyncStorage.multiRemove(keys)
// 			} catch (e) {
// 				console.error(`Did not clear data: {e}`)
// 			}
// 		})()
// 	}, [])
// )

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

const { colors } = theme

//* <View style={[styles.container, { backgroundColor: colors.background }]}>
//! This code works on ios but not <Android
//! Moto is not detecting OS theme change
//! Could be that the phone is slow
// import { NavigationContainer } from '@react-navigation/native'
// import React, { useContext, useEffect, useState } from 'react'

// import { Provider as PaperProvider, useTheme } from 'react-native-paper'
// import { SafeAreaProvider } from 'react-native-safe-area-context'
// import DrawerNavigator from './navigation/DrawerNavigator'
// import { useColorScheme } from 'react-native'

// import {
// 	CombinedDefaultTheme,
// 	CombinedDarkTheme,
// 	ThemeContext,
// 	getThemePref,
// 	setThemePref,
// } from './utilities/themeManager'
// import { color } from 'react-native-reanimated'

// export default function App() {
// 	//! On first use of app, set the color scheme to the OS color
// 	//! After first use, storedThemePref !== null
// 	//! Unless saved scheme !null
// 	//! How to read theme from storage and assure value is available
// 	//! before setting userTheme?
// 	let colorScheme = useColorScheme()
// 	console.log(`colorScheme: ${colorScheme}`)
// 	const [userTheme, setUserTheme] = useState(colorScheme)
// 	const [storedTheme, setStoredTheme] = useState(null)

// 	;(async () => {
// 		const getStoredTheme = await getThemePref()
// 		setStoredTheme(getStoredTheme)
// 		console.log(`retrieved value: ${storedTheme}`) // is this really stored value?
// 	})()

// 	//! nullish coalescing
// 	const selectedPref = storedTheme ?? userTheme
// 	console.log(`selectedSystemPref: ${selectedPref}`)

// 	appTheme = selectedPref === 'light' ? CombinedDefaultTheme : CombinedDarkTheme

// 	//! After the app is initialized we can toggle the userTheme
// 	function toggleTheme() {
// 		console.log(`Theme changed`)
// 		//! Ternary operator is more verbose but its clear what's going on
// 		//! IF you know ternary operator!
// 		setUserTheme(userTheme === 'light' ? 'dark' : 'light')
// 		//! This log prints previous scheme. Why? useState is async!
// 		// console.log(`new userTheme: ${userTheme}`)
// 	}

// 	const preferences = React.useMemo(
// 		() => ({
// 			appTheme,
// 			userTheme,
// 			toggleTheme,
// 		}),
// 		[appTheme, userTheme, toggleTheme]
// 	)

// 	//? 1.When using Chrome debugger, Light will always be returned.
// 	//? 2.App.json must have "userInterfaceStyle": "automatic" under Expo

// 	return (
// 		<SafeAreaProvider>
// 			<ThemeContext.Provider value={preferences}>
// 				<PaperProvider theme={appTheme}>
// 					<NavigationContainer theme={appTheme}>
// 						<DrawerNavigator />
// 					</NavigationContainer>
// 				</PaperProvider>
// 			</ThemeContext.Provider>
// 		</SafeAreaProvider>
// 	)

//! Syntax to combine stylesheet and Theme styling
//* import useTheme hook from Paper
//
