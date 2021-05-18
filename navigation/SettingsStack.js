import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import About from '../screens/About'
import Settings from '../screens/Settings'


const screenOptionStyle = {
	headerStyle: {
		backgroundColor: '#9AC4F8',
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

export default SettingsStackNavigator
