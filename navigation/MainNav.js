import React from 'react'
import { withTheme } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'

import WhoStack from './WhoStack'
import Home from '../screens/Home'
import Fetch from '../screens/Fetch'

const screenOptionStyle = {
	headerStyle: {
		backgroundColor: 'orange',
	},
	headerTintColor: 'white',
	headerBackTitle: 'Back',
}

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
const Tab = createMaterialBottomTabNavigator()
const MainNav = (props) => {
	const { colors } = props.theme
	return (
		<Tab.Navigator
			screenOptions={screenOptionStyle}
			shifting={false}
			initialRouteName='Home'
			activeColor='#ffff8d'
			inactiveColor='#fb8c00'
			barStyle={{ backgroundColor: colors.background }}
		>
			<Tab.Screen
				name='Home'
				component={Home}
				options={{
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
					tabBarLabel: 'Who?',
					headerBackTitle: 'Back',
					tabBarIcon: ({ color: activeColor }) => (
						<Ionicons name='md-person-outline' color={activeColor} size={26} />
					),
				}}
			/>
		</Tab.Navigator>
	)
}

export default withTheme(MainNav)

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 		padding: 40,
// 	},
// 	text: {
// 		fontSize: 30,
// 		fontWeight: '700',
// 	},
// })
