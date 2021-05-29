import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import DataFetch from '../screens/DataFetch'
import { WhoStackNav } from './WhoStackNav'
import { DataStoreStackNav } from './DataStoreStackNav'
import HomeData from '../screens/HomeData'
import Home from '../screens/Home'

const screenOptionStyle = {
	headerStyle: {
		backgroundColor: 'transparent',
		// backgroundColor: '#B00020',
	},
	headerTintColor: '#fff',
	headerTitleStyle: {
		fontSize: 20,
		fontWeight: '900',
	},
}

function getHeaderTitle(route) {
	const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home'

	switch (routeName) {
		case 'Home':
			return 'HomeStackFocus '
		case 'HomeData':
			return 'HomeStack Data Focus'
	}
}

const HomeStack = createStackNavigator()
function HomeStackNav() {
	return (
		<HomeStack.Navigator mode='modal' screenOptions={screenOptionStyle}>
			<HomeStack.Screen
				name='Home'
				component={Home}
				options={({ route }) => ({
					headerTitle: getHeaderTitle(route),
					// headerShown: true,
				})}
			/>
			<HomeStack.Screen
				name='HomeData'
				component={HomeData}
				options={({ route }) => ({
					headerTitle: getHeaderTitle(route),
					// headerShown: true,
				})}
			/>
		</HomeStack.Navigator>
	)
}
{
	/* <Scan.Screen name='Who' component={Who} options={{ headerShown: true }} />
<Scan.Screen name='Data' component={Data} /> */
}

export { HomeStackNav }
