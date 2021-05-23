import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Button } from 'react-native-paper'
import { useTheme } from 'react-native-paper'

export default function About({ navigation }) {
	const { colors } = useTheme()
	return (
		<View style={styles.container}>
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
				onPress={() => navigation.navigate('Home')}
			>
				Go Back
			</Button>
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
				onPress={() => navigation.navigate('Settings')}
			>
				Settings
			</Button>
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
		fontWeight: '900',
	},
})
