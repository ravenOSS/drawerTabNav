import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
	DefaultTheme,
	DarkTheme,
	useTheme,
	Provider as PaperProvider,
} from 'react-native-paper'
import React from 'react'
import DataFetch from '../screens/DataFetch'
import DataDetails from '../screens/DataDetails'

const screenOptionStyle = {
	headerStyle: {
		backgroundColor: 'rgba(76, 175, 80, 0.3)',
		// backgroundColor: 'transparent',
		// backgroundColor: '#B00020',
	},
	headerTintColor: '#fff',
	headerTitleStyle: {
		fontWeight: 'bold',
	},
}

function getHeaderTitle(route) {
	const routeName = getFocusedRouteNameFromRoute(route) ?? 'DataFetch'

	switch (routeName) {
		case 'DataFetch':
			return 'DataFetchFocus '
		case 'Data Details':
			return 'DataDetailsFocus'
	}
}

const DataStore = createStackNavigator()
function DataStoreStackNav() {
	return (
		<DataStore.Navigator screenOptions={screenOptionStyle}>
			<DataStore.Screen
				name='DataFetch'
				component={DataFetch}
				// headerShown: true,
				options={{ title: 'DataStoreFocus' }}
				// options={({ route }) => ({
				// 	headerTitle: getHeaderTitle(route),
				// })}
			/>
			<DataStore.Screen
				name='DataDetails'
				component={DataDetails}
				options={{ title: 'DataStoreDetailsFocus' }}
				// options={({ route }) => ({
				// 	headerTitle: getHeaderTitle(route),
				// 	headerShown: true,
				// })}
			/>
		</DataStore.Navigator>
	)
}
{
}

export { DataStoreStackNav }
