import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Button, useTheme } from 'react-native-paper'

export default function Home({ navigation }) {
	const { colors } = useTheme()

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Home</Text>
			<Button
				style={{
					borderColor: '#f08e25',
					borderWidth: 1,
					width: 225,
					margin: 10,
				}}
				// color='#f08e25'
				labelStyle={{ color: '#f08e25', fontSize: 18 }}
				mode='outlined'
				borderColor='#f08e25'
				theme={useTheme}
				onPress={() => navigation.navigate('Fetch')}
			>
				Fetch
			</Button>
			<Button
				style={{
					borderColor: '#f08e25',
					borderWidth: 1,
					width: 225,
					margin: 10,
				}}
				color='#f08e25'
				borderColor='#f08e25'
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
