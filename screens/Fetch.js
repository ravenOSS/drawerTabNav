import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Button } from 'react-native-paper'
import { useTheme } from 'react-native-paper'

export default function Fetch({ navigation }) {
	const { colors } = useTheme()
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Get Settings</Text>
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
				onPress={() => navigation.navigate('Fetch')}
			>
				Home
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
				onPress={() => navigation.navigate('Who')}
			>
				Who?
			</Button>
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
