import React, { useState, useEffect } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { StyleSheet, useColorScheme, View } from 'react-native'
import { Text, useTheme } from 'react-native-paper'
import { NavButton, NavButtonGoBack } from '../components/NavButtons'

export default function Home({ navigation }) {
	const { colors } = useTheme()

	let colorScheme = useColorScheme() == 'dark' ? 'darkTheme' : 'defaultTheme'

	return (
		<View style={[styles.container]}>
			<Text style={[styles.text]}>ColorScheme(): </Text>
			<Text style={[styles.text]}>{colorScheme}</Text>
			<Text style={[styles.text, { color: colors.accent }]}>Accent Color!</Text>
			<Text style={[styles.text, { color: colors.primary }]}>
				Home (Primary)
			</Text>
			<NavButton toWhere='Fetch' title='Fetch' />
			<NavButton toWhere='Who' title='Who?' />
			<NavButton toWhere='HomeData' title='HomeData' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		// padding: Constants.statusBarHeight,

		// margin: 60,
	},
	text: {
		fontSize: 30,
		fontWeight: '700',
	},
})
