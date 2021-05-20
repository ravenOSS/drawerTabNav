import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Data({ navigation, route }) {
	return (
		<View style={{ margin: 60 }}>
			<Text style={styles.text}>Data Panel</Text>
			<Button
				title='Close Data Panel'
				onPress={() => {
					navigation.goBack()
				}}
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
		margin: 60,
	},
	text: {
		fontSize: 30,
		fontWeight: '900',
	},
})
