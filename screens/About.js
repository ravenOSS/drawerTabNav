import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, useTheme } from 'react-native-paper'
import { NavButton, NavButtonGoBack } from '../components/NavButtons'

export default function About({ navigation }) {
	const { colors } = useTheme()
	return (
		<View style={styles.container}>
			<Text style={styles.text}>About</Text>
			<NavButton toWhere='Home' title='Home' />
			<NavButton toWhere='Settings' title='Settings' />
			<NavButtonGoBack />
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
