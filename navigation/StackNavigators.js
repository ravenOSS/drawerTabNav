import React from 'react'

import Home from '../screens/Home'
import Scan from '../screens/Scan'
import Fetch from '../screens/Fetch'
import About from '../screens/About'
import Settings from '../screens/Settings'
import DrawerNav from './DrawerNav'
// import BottomTabNav from './BottomTabNav'

// import { createDrawerNavigator } from '@react-navigation/drawer'
// const Drawer = createDrawerNavigator()

// const DrawerNav = () => {
// 	return (
// 		<Drawer.Navigator screenOptions={screenOptionStyle}>
// 			<Drawer.Screen name='Home' component={BottomTabNav} />
// 			{/* <Drawer.Screen name='About' component={About} /> */}
// 			<Drawer.Screen name='Settings' component={SettingsStackNavigator} />
// 			{/* <Drawer.Screen name='Settings' component={Settings} /> */}
// 		</Drawer.Navigator>
// 	)
// }

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator()

const BottomTabNav = () => {
	return (
		<Tab.Navigator screenOptions={screenOptionStyle}>
			<Tab.Screen name='Home' component={Home} />
			<Tab.Screen name='Fetch' component={Fetch} />
			<Tab.Screen name='Scan' component={Scan} />
		</Tab.Navigator>
	)
}

import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()

const screenOptionStyle = {
	headerStyle: {
		backgroundColor: 'orange',
	},
	headerTintColor: 'white',
	headerBackTitle: 'Back',
}

const Config = createStackNavigator()
const SettingsStackNavigator = () => {
	return (
		<Config.Navigator screenOptions={screenOptionStyle}>
			<Config.Screen name='About' component={About} />
			<Config.Screen name='Settings' component={Settings} />
		</Config.Navigator>
	)
}

const Main = createStackNavigator()
const MainStackNavigator = () => {
	return (
		<Main.Navigator initialRouteName='Drawer' screenOptions={screenOptionStyle}>
			<Main.Screen name='Tabs' component={BottomTabNav} />
			<Main.Screen name='Drawer' component={DrawerNav} />
		</Main.Navigator>
	)
}

// const Main = createStackNavigator()
// const MainStackNavigator = () => {
// 	return (
// 		<Main.Navigator initialRouteName='Drawer' screenOptions={screenOptionStyle}>
// 			<Main.Screen name='Tabs' component={BottomTabNav} />
// 			<Main.Screen name='Drawer' component={DrawerNav} />
// 		</Main.Navigator>
// 	)
// }

// export { CoreStackNavigator }
// export { CoreStackNavigator, HomeStackNavigator }
// export { SettingsStackNavigator, HomeStackNavigator }
export { SettingsStackNavigator, MainStackNavigator }
