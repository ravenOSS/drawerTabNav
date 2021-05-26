import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Button } from 'react-native-paper'
import { useTheme } from 'react-native-paper'
import NavButton from '../components/NavButton'

export default function Who({ navigation }) {
	const { colors } = useTheme()

	//TODO Navigation goes to Data instead of Who? parent screen

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Scan ID</Text>
			<NavButton toWhere='Home' title='Home' />
			<NavButton toWhere='Fetch' title='Fetch' />
			<NavButton toWhere='Data' title='Data' />

			<Button
				style={{
					borderColor: '#f08e25',
					borderWidth: 2,
					width: 225,
					margin: 10,
				}}
				// color='#f08e25'
				labelStyle={{ color: '#f08e25', fontSize: 18 }}
				mode='outlined'
				// theme={useTheme}
				onPress={() => navigation.goBack()}
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
		// padding: 40,
		// margin: 60,
	},
	text: {
		fontSize: 30,
		fontWeight: '800',
	},
})
