import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, useTheme } from 'react-native-paper'
import { NavButton, NavButtonGoBack } from '../components/NavButtons'

export default function Who({ navigation }) {
	const { colors } = useTheme()

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Scan ID</Text>
			<NavButton toWhere='Home' title='Home' />
			<NavButton toWhere='Fetch' title='Fetch' />
			<NavButton toWhere='WhoDetails' title='Who Details' />
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
		fontSize: 30,
		fontWeight: '700',
	},
})
