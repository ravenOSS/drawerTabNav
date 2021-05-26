import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import { useTheme } from 'react-native-paper'
import NavButton from '../components/NavButton'

const screenOptionStyle = {
	headerStyle: {
		backgroundColor: '#9AC4F8',
	},
	headerTintColor: 'white',
	headerBackTitle: 'Back',
}

export default function Fetch({ navigation }) {
	const { colors } = useTheme()
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Configuration</Text>
			<NavButton title='Home' toWhere='Home' />
			<NavButton title='Who' toWhere='Who' />
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
