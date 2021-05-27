import React from 'react'
import { useTheme } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'

import Home from '../screens/Home'
import Fetch from '../screens/Fetch'
import { WhoStackNav } from './WhoStackNav'

const screenOptionStyle = {
	headerStyle: {
		backgroundColor: '#f08e25',
	},
	headerTintColor: '#fff',
	headerShown: true,
}

import { getFocusedRouteNameFromRoute } from '@react-navigation/native'

function getHeaderTitle(route) {
	const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home'

	switch (routeName) {
		case 'Home':
			return 'tabHome'
		case 'Fetch':
			return 'tabFetch'
		case 'Who':
			return 'tabWho'
	}
}

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
const Tab = createMaterialBottomTabNavigator()
export default function TabNav(navigation) {
	const { colors } = useTheme
	return (
		<Tab.Navigator
			screenOptions={screenOptionStyle}
			headerMode='screen'
			shifting={false}
			initialRouteName='Home'
			headerMode='screen'
			headerShown='true'
			activeColor='#ffff8d'
			inactiveColor='#fb8c00'
			barStyle={{ backgroundColor: '#000' }}
		>
			<Tab.Screen
				name='Home'
				component={Home}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({ color: activeColor }) => (
						<Ionicons name='md-home-outline' color={activeColor} size={26} />
					),
				}}
			/>
			<Tab.Screen
				name='Fetch'
				component={Fetch}
				options={{
					tabBarLabel: 'Fetch',
					headerStyle: { backgroundColor: 'colors.primary' },
					headerTintColor: 'colors.accent',
					headerTitle: 'Fetch',
					headerShown: true,
					tabBarIcon: ({ color: activeColor }) => (
						<Ionicons
							name='md-git-network-outline'
							color={activeColor}
							size={26}
						/>
					),
				}}
			/>
			<Tab.Screen
				name='Who'
				component={WhoStackNav}
				options={{
					tabBarLabel: 'Who?',
					headerTitle: 'Who',
					headerShown: true,
					tabBarIcon: ({ color: activeColor }) => (
						<Ionicons name='md-person-outline' color={activeColor} size={26} />
					),
				}}
			/>
		</Tab.Navigator>
	)
}
