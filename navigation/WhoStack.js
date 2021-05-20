import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Data from '../screens/Data'
import Who from '../screens/Who'
import { Modal } from 'react-native'

const screenOptionStyle = {
	headerStyle: {
		backgroundColor: '#9AC4F8',
	},
	headerTintColor: 'white',
	headerBackTitle: 'Back',
}

const Scan = createStackNavigator()
const WhoStackNav = () => {
	return (
		<Scan.Navigator mode='modal' screenOptions={screenOptionStyle}>
			<Scan.Screen name='Who' component={Who} />
			<Scan.Screen name='Data' component={Data} />
		</Scan.Navigator>
	)
}

export default WhoStackNav
