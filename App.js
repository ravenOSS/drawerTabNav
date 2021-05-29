import { createDrawerNavigator } from '@react-navigation/drawer'
import {
	getFocusedRouteNameFromRoute,
	NavigationContainer,
} from '@react-navigation/native'
import * as React from 'react'
import {
	DefaultTheme,
	DarkTheme,
	useTheme,
	Provider as PaperProvider,
} from 'react-native-paper'
import TabNav from './navigation/TabNav'
import About from './screens/About'
import Settings from './screens/Settings'

function getHeaderTitle(route) {
	const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home'

	switch (routeName) {
		case 'Home':
			return 'HomeFocus'
		case 'Settings':
			return 'SettingsFocus'
		case 'About':
			return 'AboutFocus'
	}
}

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

const screenOptionStyle = {
	headerStyle: {
		// backgroundColor: 'transparent',
		backgroundColor: '#c0ca33',
	},
	headerTintColor: '#fff',
	headerShown: true,
	headerTitleStyle: {
		fontSize: 25,
		fontWeight: '900',
	},
}

const Drawer = createDrawerNavigator()

export default function App() {
	const { colors } = useTheme()
	return (
		<PaperProvider theme={theme}>
			<NavigationContainer>
				<Drawer.Navigator screenOptions={screenOptionStyle} headerMode='screen'>
					<Drawer.Screen
						name='Home'
						component={TabNav}
						options={({ route }) => ({
							headerTitle: getHeaderTitle(route),
						})}
					/>
					<Drawer.Screen
						name='Settings'
						component={Settings}
						options={({ route }) => ({
							headerTitle: getHeaderTitle(route),
						})}
					/>
					<Drawer.Screen
						name='About'
						component={About}
						options={({ route }) => ({
							headerTitle: getHeaderTitle(route),
						})}
					/>
				</Drawer.Navigator>
			</NavigationContainer>
		</PaperProvider>
	)
}
