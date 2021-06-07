import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import * as React from 'react'
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native'
import {
	Avatar,
	Caption,
	Drawer,
	Paragraph,
	Text,
	Title,
	useTheme,
} from 'react-native-paper'

// import { SafeAreaProvider } from 'react-native-safe-area-context'

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
	return (
		<SafeAreaView style={{ flex: 1 }}>
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
						label='About'
						onPress={() => navigation.navigate('About')}
					/>
					<DrawerItem
						label='Settings'
						onPress={() => navigation.navigate('Settings')}
					/>
					<DrawerItem
						label='God help me....'
						onPress={() => alert('What can I do?')}
					/>
					<Title style={styles.title}>Douglas Richards</Title>
					<Caption style={styles.caption}>@djr</Caption>
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
	preference: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 12,
		paddingHorizontal: 16,
	},
})
