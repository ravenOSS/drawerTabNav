import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function About({ navigation }) {
	return (
		<View style={styles.container}>
			{/* <Button title='Go to Home' onPress={() => navigation.navigate('Home')} /> */}
			<Button title='Go back' onPress={() => navigation.goBack()} />

			<Button
				title='Go to Settings'
				onPress={() => navigation.navigate('Settings')}
			/>

			<Text style={styles.text}>About</Text>
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
