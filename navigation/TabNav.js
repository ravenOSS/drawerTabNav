import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import React from 'react'
import { useTheme } from 'react-native-paper'
import { DataStoreStackNav } from './DataStoreStackNav'
import { HomeStackNav } from './HomeStackNav'
import { WhoStackNav } from './WhoStackNav'

const screenOptionStyle = {
	headerStyle: {
		backgroundColor: '#f08e25',

		headerTintColor: '#fff',
		headerTitleStyle: {
			fontSize: 25,
			fontWeight: '700',
		},
	},
	headerMode: 'screen',
	headerTitleAlign: 'center',
}

const Tab = createMaterialBottomTabNavigator()
export default function TabNav(navigation) {
	const { colors } = useTheme
	return (
		<Tab.Navigator
			// screenOptions={screenOptionStyle}
			headerMode='screen'
			shifting={false}
			initialRouteName='Home'
			headerShown='true'
			activeColor='#c0ca33'
			// activeColor='#ffff8d'
			inactiveColor='#fb8c00'
			barStyle={{ backgroundColor: '#000' }}
		>
			<Tab.Screen
				name='Home'
				component={HomeStackNav}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({ color: activeColor }) => (
						<Ionicons name='md-home-outline' color={activeColor} size={26} />
					),
				}}
			/>
			<Tab.Screen
				name='Fetch'
				component={DataStoreStackNav}
				options={{
					tabBarLabel: 'Fetch',
					tabBarIcon: ({ color: activeColor }) => (
						<Ionicons name='md-list-sharp' color={activeColor} size={26} />
					),
				}}
			/>
			<Tab.Screen
				name='Who'
				component={WhoStackNav}
				options={{
					tabBarLabel: 'Who?',
					tabBarIcon: ({ color: activeColor }) => (
						<Ionicons name='md-person-outline' color={activeColor} size={26} />
					),
				}}
			/>
		</Tab.Navigator>
	)
}
