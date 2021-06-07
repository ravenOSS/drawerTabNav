import { createStackNavigator } from '@react-navigation/stack'
import { Button } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'
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
		backgroundColor: '#c0ca33',
	},
	headerTintColor: '#fff',
	headerTitleStyle: {
		fontSize: 25,
		fontWeight: '700',
	},
	headerTitleAlign: 'center',
	headerMode: 'screen',
}

const DataStore = createStackNavigator()
function DataStoreStackNav() {
	return (
		<DataStore.Navigator screenOptions={screenOptionStyle}>
			<DataStore.Screen
				name='DataFetch'
				component={DataFetch}
				options={({ navigation }) => ({
					headerTitle: 'Data Focus',
					headerLeft: () => (
						<Button
							icon={({ color, size }) => (
								<Ionicons name='md-menu-sharp' size={26} color='#000' />
							)}
							onPress={() => navigation.openDrawer()}
						/>
					),
				})}
			/>
			<DataStore.Screen
				name='DataDetails'
				component={DataDetails}
				options={{ title: 'DataStoreDetails' }}
			/>
		</DataStore.Navigator>
	)
}

export { DataStoreStackNav }
