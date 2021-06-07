import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Button } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'

import HomeData from '../screens/HomeData'
import Home from '../screens/Home'
import About from '../screens/About'
import Settings from '../screens/Settings'

const screenOptionStyle = {
	headerStyle: {
		backgroundColor: '#c0ca33',
	},
	headerTintColor: '#fff',
	headerTitleStyle: {
		fontSize: 25,
		fontWeight: '700',
	},
	headerTitleAlign: 'center',
	headerMode: 'modal',
}

const HomeStack = createStackNavigator()
function HomeStackNav() {
	return (
		<HomeStack.Navigator screenOptions={screenOptionStyle}>
			<HomeStack.Screen
				name='Home'
				component={Home}
				options={({ navigation }) => ({
					headerTitle: 'Home Focus',
					headerLeft: () => (
						<Button
							icon={({ color, size }) => (
								<Ionicons name='md-menu-sharp' size={26} color='#000' />
							)}
							onPress={() => navigation.openDrawer()}
						/>
					),
				})}
			/>
			<HomeStack.Screen name='HomeData' component={HomeData} />
			<HomeStack.Screen name='About' component={About} />
			<HomeStack.Screen name='Settings' component={Settings} />
		</HomeStack.Navigator>
	)
}

export { HomeStackNav }
