import React from 'react'
import {
	DefaultTheme,
	DarkTheme,
	Provider as PaperProvider,
	Drawer,
} from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { MainStackNavigator } from './navigation/StackNavigators'
import DrawerNav from './navigation/DrawerNav'
import BottomTabNav from './navigation/BottomTabNav'
import MainNav from './navigation/MainNav'

const theme = {
	...DefaultTheme,
	roundness: 2,
	colors: {
		...DefaultTheme.colors,
		primary: '#9e9e9e',
		accent: 'grey100',
		background: 'grey100',
	},
}

import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()

export default function App() {
	return (
		<PaperProvider theme={theme}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name='Root' component={DrawerNav} />
					{/* <Stack.Screen name='Home' component={Home} /> */}
				</Stack.Navigator>
			</NavigationContainer>
		</PaperProvider>
	)
}

// export default function App() {
// 	return (
// 		<NavigationContainer>
// 			<Stack.Navigator>
// 				<Stack.Screen name='Main' component={MainNav} />
// 				{/* <Stack.Screen name='Home' component={Home} /> */}
// 			</Stack.Navigator>
// 		</NavigationContainer>
// 	)
// }
