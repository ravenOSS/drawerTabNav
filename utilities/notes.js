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

//! Syntax to combine stylesheet and Theme styling
//* import useTheme hook from Paper
//* const { colors } = theme
//* <View style={[styles.container, { backgroundColor: colors.background }]}>

