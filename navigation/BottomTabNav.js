import React from 'react'
import Home from '../screens/Home'
import Fetch from '../screens/Fetch'
import Who from '../screens/Who'

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
				name='Who'
				component={Who}
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
