import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import React from 'react'
import { useTheme } from 'react-native-paper'
import { DataStoreStackNav } from './DataStoreStackNav'
import { HomeStackNav } from './HomeStackNav'
import { WhoStackNav } from './WhoStackNav'

const screenOptionStyle = {
	headerStyle: {
		backgroundColor: '#f08e25',
	},
	headerTintColor: '#fff',
	headerTitleStyle: {
		fontWeight: 'bold',
	},
}

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

const Tab = createMaterialBottomTabNavigator()
export default function TabNav(navigation) {
	const { colors } = useTheme
	return (
		<Tab.Navigator
			screenOptions={screenOptionStyle}
			headerMode='screen'
			shifting={false}
			initialRouteName='Home'
			headerShown='true'
			activeColor='#ffff8d'
			inactiveColor='#fb8c00'
			barStyle={{ backgroundColor: '#000' }}
		>
			<Tab.Screen
				name='Home'
				component={HomeStackNav}
				options={({ route }) => ({
					headerTitle: getHeaderTitle(route),
					tabBarLabel: 'Home',
					tabBarIcon: ({ color: activeColor }) => (
						<Ionicons name='md-home-outline' color={activeColor} size={26} />
					),
				})}
			/>
			<Tab.Screen
				name='Fetch'
				component={DataStoreStackNav}
				options={({ route }) => ({
					headerTitle: getHeaderTitle(route),
					tabBarLabel: 'Fetch',
					tabBarIcon: ({ color: activeColor }) => (
						<Ionicons name='md-list-sharp' color={activeColor} size={26} />
					),
				})}
			/>
			<Tab.Screen
				name='Who'
				component={WhoStackNav}
				options={({ route }) => ({
					headerTitle: getHeaderTitle(route),
					tabBarLabel: 'Who?',
					tabBarIcon: ({ color: activeColor }) => (
						<Ionicons name='md-person-outline' color={activeColor} size={26} />
					),
				})}
			/>
		</Tab.Navigator>
	)
}
