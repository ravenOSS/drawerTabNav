import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import { useTheme } from 'react-native-paper'
import NavButton from '../components/NavButton'

export default function DataDsiplay({ navigation }) {
	const { colors } = useTheme()
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Stored Data Details</Text>
			<NavButton title='Home' toWhere='Home' />
			<NavButton title='Who' toWhere='Who' />
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
		fontWeight: '700',
	},
})
