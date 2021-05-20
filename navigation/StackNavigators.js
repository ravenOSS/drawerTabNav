import React from 'react'

import { Button } from 'react-native'

import Home from '../screens/Home'
import Scan from '../screens/Who'
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

const screenOptionStyle = {
	headerStyle: {
		backgroundColor: 'orange',
	},
	headerTintColor: 'white',
	headerBackTitle: 'Back',
}

import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()

const Config = createStackNavigator()
const SettingsStackNavigator = () => {
	return (
		<Config.Navigator screenOptions={screenOptionStyle}>
			<Config.Screen name='About' component={About} />
			<Config.Screen name='Config' component={Settings} />
		</Config.Navigator>
	)
}

const Main = createStackNavigator()
const MainStackNavigator = () => {
	return (
		<Main.Navigator initialRouteName='Drawer' screenOptions={screenOptionStyle}>
			<Main.Screen
				name='Home'
				component={Home}
				options={{
					title: 'Home View',
					headerRight: () => (
						<Button title={'Alert'} onPress={() => alert('Home Alerted')} />
					),
					headerBackTitle: 'Back',
				}}
			/>
			<Main.Screen
				name='Fetch'
				component={Fetch}
				options={{
					title: 'Fetch View',
					headerRight: () => (
						<Button title={'Alert'} onPress={() => alert('Fetch Alerted')} />
					),
					headerBackTitle: 'Back',
				}}
			/>
			<Main.Screen
				name='Scan'
				component={Scan}
				options={{
					title: 'Scan View',
					headerRight: () => (
						<Button title={'Alert'} onPress={() => alert('Scan Alerted')} />
					),
					headerBackTitle: 'Back',
				}}
			/>
			<Main.Screen name='Left' component={DrawerNav} />
		</Main.Navigator>
	)
}

// export { CoreStackNavigator }
// export { CoreStackNavigator, HomeStackNavigator }
// export { SettingsStackNavigator, HomeStackNavigator }
export { SettingsStackNavigator, MainStackNavigator }
