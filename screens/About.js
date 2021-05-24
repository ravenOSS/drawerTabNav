import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import { useTheme } from 'react-native-paper'
import NavButton from '../components/NavButton'

export default function About({ navigation }) {
	const { colors } = useTheme()
	return (
		<View style={styles.container}>
			<Text style={styles.text}>About</Text>
			<NavButton toWhere='Home' title='Home' />
			<NavButton toWhere='Settings' title='Settings' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 40,
	},
	text: {
		fontSize: 30,
		fontWeight: '900',
	},
})
