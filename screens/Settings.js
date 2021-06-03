import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, useTheme } from 'react-native-paper'
import {NavButton, NavButtonGoBack } from '../components/NavButtons'

export default function Settings({ navigation }) {
	const { colors } = useTheme()
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Settings</Text>
			<NavButton toWhere='Home' title='Home' />
			<NavButton toWhere='About' title='About' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		// padding: 40,
	},
	text: {
		fontSize: 30,
		fontWeight: '700',
	},
})
