import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Data from '../screens/Data'
import Who from '../screens/Who'

const screenOptionStyle = {
	headerStyle: {
		backgroundColor: '#651fff',
	},
	headerTintColor: '#fff',
	headerTitleStyle: {
		fontSize: 20,
		fontWeight: '900',
	},
}

function getHeaderTitle(route) {
	const routeName = getFocusedRouteNameFromRoute(route) ?? 'Who'

	switch (routeName) {
		case 'Who':
			return 'WhoStack Who Focus '
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
				options={{ title: 'WhoStack Who Focus' }}
				// options={({ route }) => ({
				// 	headerTitle: getHeaderTitle(route),
				// 	// headerShown: true,
				// })}
			/>
			<Scan.Screen
				name='Data'
				component={Data}
				options={{ title: 'WhoStackNav Data Focus' }}
				// options={({ route }) => ({
				// 	headerTitle: getHeaderTitle(route),
				// 	// headerShown: true,
				// })}
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
