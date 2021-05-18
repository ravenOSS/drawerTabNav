import * as React from 'react'
// import SettingsStackNavigator from './SettingsStack'
import About from '../screens/About'
import Settings from '../screens/Settings'
// import { SettingsStackNavigator } from './StackNavigators'
// import BottomTabNav from './BottomTabNav'

const screenOptionStyle = {
	headerStyle: {
		backgroundColor: 'orange',
	},
	headerTintColor: 'white',
	headerBackTitle: 'Back',
}

import { createDrawerNavigator } from '@react-navigation/drawer'
const Drawer = createDrawerNavigator()

export default function DrawerNav() {
	return (
		<Drawer.Navigator screenOptions={screenOptionStyle}>
			{/* <Drawer.Screen name='Home' component={BottomTabNav} /> */}
			<Drawer.Screen
				name='About'
				component={About}
				options={{
					title: 'About View',
					headerRight: () => (
						<Button title={'Alert'} onPress={() => alert('About Alerted')} />
					),
					headerBackTitle: 'Back',
				}}
			/>
			{/* <Drawer.Screen name='Settings' component={SettingsStackNavigator} /> */}
			<Drawer.Screen
				name='Settings'
				component={Settings}
				options={{
					title: 'Settings View',
					headerRight: () => (
						<Button title={'Alert'} onPress={() => alert('Settings Alerted')} />
					),
					headerBackTitle: 'Back',
				}}
			/>
		</Drawer.Navigator>
	)
}

// export default function DrawerNav() {
// 	return (
// 		<Drawer.Navigator screenOptions={screenOptionStyle}>
// 			<Drawer.Screen name='Home' component={BottomTabNav} />
// 			{/* <Drawer.Screen name='About' component={About} /> */}
// 			<Drawer.Screen name='Settings' component={SettingsStackNavigator} />
// 			{/* <Drawer.Screen name='Settings' component={Settings} /> */}
// 		</Drawer.Navigator>
// 	)
// }
