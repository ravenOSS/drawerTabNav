import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Button } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'

import HomeData from '../screens/HomeData'
import Home from '../screens/Home'

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
		</HomeStack.Navigator>
	)
}

export { HomeStackNav }
