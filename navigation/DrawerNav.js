import * as React from 'react'
import { Button, withTheme } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'
import About from '../screens/About'
import Settings from '../screens/Settings'
import TabNav from './TabNav'

const screenOptionStyle = {
	headerStyle: {
		backgroundColor: 'orange',
	},
	headerTintColor: 'white',
	headerBackTitle: 'Back',
}

import { createDrawerNavigator } from '@react-navigation/drawer'
const Drawer = createDrawerNavigator()

const DrawerNav = ({ navigation }) => {
	return (
		<Drawer.Navigator screenOptions={screenOptionStyle} headerMode='none'>
			<Drawer.Screen
				name='Home'
				component={TabNav}
			/>
			<Drawer.Screen
				name='About'
				component={About}
				options={{
					title: 'About',
					headerShown: true,
					headerRight: () => (
						<Button title={'Alert'} onPress={() => alert('About Alerted')} />
					),
					headerBackTitle: 'Back',
				}}
			/>
			<Drawer.Screen
				name='Settings'
				component={Settings}
				options={{
					title: 'Settings',
					headerShown: true,
					headerRight: () => (
						<Button title={'Alert'} onPress={() => alert('Settings Alerted')} />
					),
					headerBackTitle: 'Back',
				}}
			/>
		</Drawer.Navigator>
	)
}

export default withTheme(DrawerNav)
