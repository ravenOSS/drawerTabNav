import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, useTheme } from 'react-native-paper'
import { NavButton, NavButtonGoBack } from '../components/NavButtons'
import { useFocusEffect } from '@react-navigation/native'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { AppPreferenceContext } from '../utilities/themeManager'

{
	/* <AppPreferenceContext.Consumer> */
}
const DataFetch = ({ navigation }) => {
	const paperTheme = useTheme()
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Stored Data</Text>
			<NavButton title='Home' toWhere='Home' />
			<NavButton title='Who' toWhere='Who' />
			<NavButton title='Data Details' toWhere='DataDetails' />
			<Text style={{ color: paperTheme.colors.background }}>Context</Text>
		</View>
	)
}
// </AppPreferenceContext.Consumer>

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		// padding: Constants.statusBarHeight,

		// margin: 60,
	},
	text: {
		fontSize: 30,
		fontWeight: '700',
	},
})

export { DataFetch }
