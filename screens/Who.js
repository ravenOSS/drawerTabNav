import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Who({ route, navigation }) {
	return (
		// <View style={styles.container}>
		<View style={styles.container}>
			<Text style={styles.text}>Scan ID</Text>
			<Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
			<Button title='Data' onPress={() => navigation.navigate('Data')} />
			<Button title='Go back' onPress={() => navigation.goBack()} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 40,
		margin: 60,
	},
	text: {
		fontSize: 30,
		fontWeight: '700',
	},
})
