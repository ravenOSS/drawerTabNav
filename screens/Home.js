import React, { useContext } from 'react'

import { StyleSheet, useColorScheme, View } from 'react-native'
import { Text, useTheme } from 'react-native-paper'
import { NavButton } from '../components/NavButtons'
import { ThemeContext } from '../utilities/themeManager'

export default function Home({ navigation }) {
	const { isDark } = useContext(ThemeContext)

	const theme = useTheme()

	let homeColor = useColorScheme()

	return (
		<View
			style={[styles.container, { backgroundColor: theme.colors.background }]}
		>
			<Text allowFontScaling={true} style={[styles.text]}>
				Appearance:{' '}
			</Text>
			<Text allowFontScaling={true} style={[styles.text]}>
				{isDark === 'on' ? 'Dark Mode' : 'Light Mode'}
			</Text>

			<Text
				allowFontScaling={false}
				style={[styles.text, { color: theme.colors.accent }]}
			>
				osColor: {homeColor}
			</Text>
			<Text
				allowFontScaling={false}
				style={[styles.text, { color: theme.colors.accent }]}
			>
				Accent Color!
			</Text>

			<Text
				allowFontScaling={false}
				style={[styles.text, { color: theme.colors.primary }]}
			>
				Home (Primary)
			</Text>
			<NavButton toWhere='Fetch' title='Fetch' />
			<NavButton toWhere='Who' title='Who?' />
			<NavButton toWhere='HomeData' title='HomeData' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		// padding: Constants.statusBarHeight,

		// margin: 60,
	},
	text: {
		fontSize: 25,
		fontWeight: '700',
	},
})
