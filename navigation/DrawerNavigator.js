import { createDrawerNavigator } from '@react-navigation/drawer'
import * as React from 'react'
import { StyleSheet } from 'react-native'
import { useTheme } from 'react-native-paper'

import DrawerContent from './DrawerContent'
import TabNav from './TabNav'

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
	flex: 1,
	paddingTop: 60,
	backgroundColor: '#c0ca33',
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

export default function DrawerNavigator() {
	const theme = useTheme()
	return (
		<Drawer.Navigator
			drawerStyle={drawerStyle}
			drawerContent={(props) => <DrawerContent {...props} />}
			// screenOptions={screenOptionStyle}
		>
			<Drawer.Screen
				name='Home'
				component={TabNav}
				options={{ title: 'Home' }}
			/>
		</Drawer.Navigator>
	)
}

const styles = StyleSheet.create({
	drawerContent: {
		flex: 1,
	},
	userInfoSection: {
		paddingLeft: 20,
	},
	title: {
		marginTop: 20,
		fontWeight: 'bold',
	},
	caption: {
		fontSize: 14,
		lineHeight: 14,
	},
	row: {
		marginTop: 20,
		flexDirection: 'row',
		alignItems: 'center',
	},
	section: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 15,
	},
	paragraph: {
		fontWeight: 'bold',
		marginRight: 3,
	},
	drawerSection: {
		marginTop: 15,
	},
	preference: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 12,
		paddingHorizontal: 16,
	},
})
