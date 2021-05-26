import React from 'react'
import { useTheme } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'

import WhoStack from './WhoStack'
import Home from '../screens/Home'
import Fetch from '../screens/Fetch'

const screenOptionsStyle = {
	headerStyle: {
		backgroundColor: 'orange',
	},
	headerTintColor: 'white',
	headerBackTitle: 'Back',
}



import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
const Tab = createMaterialBottomTabNavigator()
export default function TabNav(props) {
	const { colors } = useTheme
	return (
		<Tab.Navigator
			screenOptions={screenOptionsStyle}
			shifting={false}
			initialRouteName='Home'
			// headerMode='none'
			activeColor='#ffff8d'
			inactiveColor='#fb8c00'
			barStyle={{ backgroundColor: 'black' }}
		>
			<Tab.Screen
				name='Home'
				component={Home}
				options={{
					title: 'Home',
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
					title: 'Fetch View',
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
				component={WhoStack}
				options={{
					title: 'Identify',
					tabBarLabel: 'Who?',
					headerRight: () => (
						<Button title={'Alert'} onPress={() => alert('Home Alerted')} />
					),
					headerBackTitle: 'Back',
					tabBarIcon: ({ color: activeColor }) => (
						<Ionicons name='md-person-outline' color={activeColor} size={26} />
					),
				}}
			/>
		</Tab.Navigator>
	)
}
