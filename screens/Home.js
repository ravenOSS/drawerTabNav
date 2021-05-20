import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
// import Who from '../screens/Who'

export default function Home({ navigation }) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Home Screen</Text>
			<Button title='Fetch' onPress={() => navigation.navigate('Fetch')} />
			<Button title='Who?' onPress={() => navigation.navigate('Who')} />
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
		fontWeight: '700',
	},
})
