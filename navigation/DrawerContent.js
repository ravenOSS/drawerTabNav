import AsyncStorage from '@react-native-async-storage/async-storage'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import React, { useCallback, useContext, useState } from 'react'
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native'
import {
	Caption,
	Switch,
	Text,
	Title,
	TouchableRipple,
	useTheme,
} from 'react-native-paper'
import {
	AppPreferenceContext,
	CombinedDefaultTheme,
	CombinedDarkTheme,
	getAppTheme,
	getSystemTheme,
	setAppTheme,
} from '../utilities/themeManager'

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

export default function DrawerContent({ navigation }) {
	const paperTheme = useTheme()
	const { toggleTheme, userTheme, appTheme } =
		React.useContext(AppPreferenceContext)

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Text>{userTheme === 'dark' ? 'Switch is ON' : 'Switch is OFF'}</Text>
			{/* <TouchableRipple onPress={toggleTheme}> */}
			<Switch
				style={[{ backgroundColor: paperTheme.colors.accent }]}
				color={'red'}
				value={userTheme === 'dark'}
				onValueChange={toggleTheme}
			/>
			{/* </TouchableRipple> */}

			<DrawerContentScrollView>
				<TouchableOpacity
					style={{ marginLeft: 10 }}
					onPress={() => {
						navigation.toggleDrawer()
					}}
				>
					<Text>Close</Text>
				</TouchableOpacity>

				<View style={styles.userInfoSection}>
					<DrawerItem
						style={styles.drawerItem}
						label='About'
						onPress={() => navigation.navigate('About')}
					/>
					<DrawerItem
						label='Settings'
						onPress={() => navigation.navigate('Settings')}
					/>
					<DrawerItem
						label='God help me....'
						onPress={() => alert('What do you want?')}
					/>
					<Title style={styles.title}>Douglas Richards</Title>
					<Caption style={styles.caption}>@djr</Caption>
					<Title style={styles.title}>Privacy</Title>
					<Caption style={styles.caption}>Keeping you safe</Caption>
					<Text>No personal information is stored or transmitted.</Text>
				</View>
			</DrawerContentScrollView>
		</SafeAreaView>
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
		fontWeight: 'bold',
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
		paddingLeft: 15,
	},
	paragraph: {
		fontWeight: 'bold',
		marginRight: 3,
	},
	drawerSection: {
		marginTop: 15,
	},
	drawerItem: {
		marginTop: 15,
		fontSize: 16,
		fontWeight: 'bold',
	},
	preference: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 12,
		paddingHorizontal: 16,
	},
})
