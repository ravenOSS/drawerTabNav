import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Settings({ navigation }) {
	return (
		<View style={styles.container}>
			{/* <Button title='Go back' onPress={() => navigation.goBack()} /> */}
			<Button
				title='Go to About Page'
				onPress={() => navigation.navigate('About')}
			/>
			<Text style={styles.text}>Settings</Text>
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
