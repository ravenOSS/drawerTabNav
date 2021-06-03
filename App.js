import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
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
		backgroundColor: '#c0ca33',
	},
	headerTintColor: '#fff',
	headerTitleStyle: {
		fontSize: 25,
		fontWeight: '700',
	},
	headerMode: 'screen',
	headerTitleAlign: 'center',
}

const drawerStyle = {
	paddingTop: 40,
	backgroundColor: '#000',
	width: 240,
}

const ContentOptions = {
	activeTintColor: '#c0ca33',
	activeBackgroundColor: '#000',
	inactiveTintColor: '#fb8c00',
	inactiveBackgroundColor: '#000',
	labelStyle: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	itemStyle: { marginVertical: 20 },
}

const Drawer = createDrawerNavigator()

export default function App() {
	const { colors } = useTheme()
	return (
		<PaperProvider theme={theme}>
			<NavigationContainer>
				<Drawer.Navigator
					screenOptions={screenOptionStyle}
					drawerStyle={drawerStyle}
					drawerContentOptions={ContentOptions}
				>
					<Drawer.Screen
						name='Home'
						component={TabNav}
						options={{ title: 'Home' }}
					/>
					<Drawer.Screen
						name='Settings'
						component={Settings}
						options={{ title: 'Settings' }}
					/>
					<Drawer.Screen
						name='About'
						component={About}
						options={{ title: 'About' }}
					/>
				</Drawer.Navigator>
			</NavigationContainer>
		</PaperProvider>
	)
}
