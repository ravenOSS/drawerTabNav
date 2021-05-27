import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, useTheme } from 'react-native-paper'
import NavButton from '../components/NavButton'

export default function Who({ navigation }) {
	const { colors } = useTheme()

	//TODO Navigation goes to Data instead of Who? parent screen

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Scan ID</Text>
			<NavButton toWhere='Home' title='Home' />
			<NavButton toWhere='Fetch' title='Fetch' />
			<NavButton toWhere='Data' title='Data' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		// padding: 40,
		// margin: 60,
	},
	text: {
		fontSize: 30,
		fontWeight: '800',
	},
})
