import React from 'react'
import { StyleSheet, useColorScheme, View } from 'react-native'
import { Text, useTheme } from 'react-native-paper'
import { NavButton, NavButtonGoBack } from '../components/NavButtons'
import { useFocusEffect } from '@react-navigation/native'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { ThemeContext } from '../utilities/themeManager'
// import { useColorScheme } from 'react-native-appearance'

{
	/* <ThemeContext.Consumer> */
}
const DataFetch = ({ navigation }) => {
	const theme = useTheme()
	return (
		<View
			style={[styles.container, { backgroundColor: theme.colors.background }]}
		>
			<Text style={styles.text}>Stored Data</Text>
			<NavButton title='Home' toWhere='Home' />
			<NavButton title='Who' toWhere='Who' />
			<NavButton title='Data Details' toWhere='DataDetails' />
			<Text style={{ color: theme.colors.error }}>
				OS Theme: {useColorScheme()}
			</Text>
		</View>
	)
}
// </ThemeContext.Consumer>

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 30,
		fontWeight: '700',
	},
})

export { DataFetch }
