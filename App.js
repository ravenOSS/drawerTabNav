import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from './navigation/DrawerNavigator'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import * as React from 'react'
import {
	DefaultTheme,
	DarkTheme,
	useTheme,
	Provider as PaperProvider,
} from 'react-native-paper'

const theme = {
	...DefaultTheme,
	roundness: 2,
	colors: {
		...DefaultTheme.colors,
		primary: '#9e9e9e',
		accent: 'grey100',
		background: 'rgba(76, 175, 80, 0.3)',
	},
}

export default function App() {
	return (
		<SafeAreaProvider>
			<PaperProvider theme={theme}>
				<NavigationContainer>
					<DrawerNavigator />
				</NavigationContainer>
			</PaperProvider>
		</SafeAreaProvider>
	)
}
