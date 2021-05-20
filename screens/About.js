import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function About({ navigation }) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>About</Text>
			<Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
			{/* <Button title='Go back' onPress={() => navigation.goBack()} /> */}

			<Button
				title='Go to Settings'
				onPress={() => navigation.navigate('Settings')}
			/>
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
