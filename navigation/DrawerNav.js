import * as React from 'react'
import { withTheme } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'
// import SettingsStackNavigator from './SettingsStack'
import About from '../screens/About'
import Settings from '../screens/Settings'
// import { SettingsStackNavigator } from './StackNavigators'
import MainNav from './MainNav'

const screenOptionStyle = {
	headerStyle: {
		backgroundColor: 'orange',
	},
	headerTintColor: 'white',
	headerBackTitle: 'Back',
}

import { createDrawerNavigator } from '@react-navigation/drawer'
const Drawer = createDrawerNavigator()

const DrawerNav = ({ props, navigation }) => {
	// const { colors } = props.theme
	return (
		<Drawer.Navigator screenOptions={screenOptionStyle}>
			<Drawer.Screen
				name='Home'
				component={MainNav}
				// options={{
				// 	title: 'MainNav',
				// 	headerRight: () => (
				// 		<Button title={'Alert'} onPress={() => alert('MainNav Alerted')} />
				// 	),
				// 	headerBackTitle: 'Back',
				// }}
			/>
			<Drawer.Screen
				name='About'
				component={About}
				options={{
					title: 'About',
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
