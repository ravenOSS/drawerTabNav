import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'


import WhoDetails from '../screens/WhoDetails'
import Who from '../screens/Who'
import { Button } from 'react-native-paper'

const screenOptionStyle = {
	headerStyle: {
		backgroundColor: '#fb8c00',
	},
	headerTintColor: '#fff',
	headerTitleStyle: {
		fontSize: 25,
		fontWeight: '700',
	},
	headerTitleAlign: 'center',
	headerMode: 'screen',
}

const Scan = createStackNavigator()
function WhoStackNav() {
	return (
		<Scan.Navigator mode='modal' screenOptions={screenOptionStyle}>
			<Scan.Screen
				name='Who'
				component={Who}
				options={({ navigation }) => ({
					headerTitle: 'Who Focus',
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
			<Scan.Screen
				name='WhoDetails'
				component={WhoDetails}
				options={{
					title: 'Who Details',
				}}
			/>
		</Scan.Navigator>
	)
}

// options={({ navigation }) => ({
// 	title: "React Navigation",
// 	headerLeft: () =>
// 		<Icon
// 			onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
// 			style={[{ color: 'white', marginLeft: 8 }]}
// 			size={24}
// 			name={'menu'}
// 		/>
// })

export { WhoStackNav }
