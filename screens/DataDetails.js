import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, useTheme } from 'react-native-paper'
import { NavButton, NavButtonGoBack } from '../components/NavButtons'

const DataDetails = ({ navigation }) => {
	const { colors } = useTheme()
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Stored Data Details</Text>
			<NavButton title='Home' toWhere='Home' />
			<NavButton title='Who' toWhere='Who' />
			<NavButtonGoBack />
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

export {DataDetails}