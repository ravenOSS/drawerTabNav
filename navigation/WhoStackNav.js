import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Data from '../screens/Data'
import Who from '../screens/Who'

const screenOptionStyle = {
	headerStyle: {
		backgroundColor: '#9AC4F8',
	},
	headerTintColor: 'black',
}

function getHeaderTitle(route) {
	const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home'

	switch (routeName) {
		case 'WhoStack Who Focus':
			return 'Who '
		case 'Data':
			return 'WhoStack Data Focus'
	}
}

const Scan = createStackNavigator()
function WhoStackNav() {
	return (
		<Scan.Navigator mode='modal' screenOptions={screenOptionStyle}>
			<Scan.Screen
				name='Who'
				component={Who}
				options={({ route }) => ({
					headerTitle: getHeaderTitle(route),
					// headerShown: true,
				})}
			/>
			<Scan.Screen
				name='Data'
				component={Data}
				options={({ route }) => ({
					headerTitle: getHeaderTitle(route),
					// headerShown: true,
				})}
			/>
		</Scan.Navigator>
	)
}
{
	/* <Scan.Screen name='Who' component={Who} options={{ headerShown: true }} />
<Scan.Screen name='Data' component={Data} /> */
}

export { WhoStackNav }
// export { WhoStackNav }
