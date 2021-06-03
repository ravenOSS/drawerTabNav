import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text, useTheme } from 'react-native-paper'
import { NavButton, NavButtonGoBack } from '../components/NavButtons'

export default function Data({ navigation, route }) {
	const { colors } = useTheme()
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Data Panel</Text>
			<NavButton toWhere='Fetch' title='Fetch' />

			<Button
				style={{
					borderColor: '#f08e25',
					borderWidth: 2,
					width: 225,
					margin: 10,
				}}
				color='#f08e25'
				labelStyle={{ color: '#f08e25', fontSize: 18 }}
				mode='outlined'
				theme={useTheme}
				title='Close Data Panel'
				onPress={() => {
					navigation.goBack()
				}}
			>
				Go Back
			</Button>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
		margin: 40,
	},
	text: {
		fontSize: 30,
		fontWeight: '700',
	},
})
