import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import TabNav from './navigation/TabNav'
import About from './screens/About'
import Settings from './screens/Settings'

const screenOptionStyle = {
	headerStyle: {
		backgroundColor: '#f08e25',
	},
	headerTintColor: '#fff',
	headerShown: true,
}

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

export default function App() {
	return (
		<PaperProvider>
			<NavigationContainer>
				<Drawer.Navigator screenOptions={screenOptionStyle} headerMode='screen'>
					<Drawer.Screen name='Home' component={TabNav} />
					<Drawer.Screen name='About' component={About} />
					<Drawer.Screen name='Settings' component={Settings} />
				</Drawer.Navigator>
			</NavigationContainer>
		</PaperProvider>
	)
}
