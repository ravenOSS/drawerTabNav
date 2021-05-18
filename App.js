import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { MainStackNavigator } from './navigation/StackNavigators'
// import DrawerNav from './navigation/DrawerNav'

// import colors from './constants/colors'

export default function App() {
	return (
		<NavigationContainer>
			<MainStackNavigator />
		</NavigationContainer>
	)
}
