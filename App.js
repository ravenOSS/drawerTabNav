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
