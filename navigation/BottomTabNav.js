import React from 'react'
// import {
// 	// SettingsStackNavigator,
// 	// CoreStackNavigator,
// 	HomeStackNavigator,
// } from './StackNavigators'
import Home from '../screens/Home'
import Fetch from '../screens/Fetch'
import Scan from '../screens/Scan'
const screenOptionStyle = {
	headerStyle: {
		backgroundColor: 'orange',
	},
	headerTintColor: 'white',
	headerBackTitle: 'Back',
}

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Button } from 'react-native'
const Tab = createBottomTabNavigator()

export default function BottomTabNav() {
	return (
		<Tab.Navigator screenOptions={screenOptionStyle}>
			<Tab.Screen
				name='Home'
				component={Home}
				options={{
					title: 'Home View',
					headerRight: () => (
						<Button title={'Alert'} onPress={() => alert('Home Alerted')} />
					),
					headerBackTitle: 'Back',
				}}
			/>
			<Tab.Screen
				name='Fetch'
				component={Fetch}
				options={{
					title: 'Fetch View',
					headerRight: () => (
						<Button title={'Alert'} onPress={() => alert('Fetch Alerted')} />
					),
					headerBackTitle: 'Back',
				}}
			/>
			<Tab.Screen
				name='Scan'
				component={Scan}
				options={{
					title: 'Scan View',
					headerRight: () => (
						<Button title={'Alert'} onPress={() => alert('Scan Alerted')} />
					),
					headerBackTitle: 'Back',
				}}
			/>
		</Tab.Navigator>
	)
}
