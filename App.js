import React from 'react'
import {
	DefaultTheme,
	DarkTheme,
	Provider as PaperProvider,
} from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNav from './navigation/DrawerNav'

const theme = {
	...DefaultTheme,
	borderColor: '#f08e25',
}

import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()

export default function App() {
	return (
		<PaperProvider theme={theme}>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName='Home'
					headerMode='float'
					headerShown='false'
					screenOptions={{
						headerTintColor: 'white',
						headerStyle: { backgroundColor: '#f08e25' },
					}}
				>
					<Stack.Screen name='Root' component={DrawerNav} />
				</Stack.Navigator>
			</NavigationContainer>
		</PaperProvider>
	)
}
