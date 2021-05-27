import Constants from 'expo-constants'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, useTheme } from 'react-native-paper'
import NavButton from '../components/NavButton'

export default function Home({ navigation }) {
	const { colors } = useTheme()

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Home</Text>
			<NavButton toWhere='Fetch' title='Fetch' />
			<NavButton toWhere='Who' title='Who?' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: Constants.statusBarHeight,
		// margin: 60,
	},
	text: {
		fontSize: 30,
		fontWeight: '700',
	},
})
