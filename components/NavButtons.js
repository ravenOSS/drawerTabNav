import * as React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native-paper'

// This navigation button requires two properties:
// title: String
// toWhere: String (Screen)
export function NavButton({ title, toWhere }) {
	const navigation = useNavigation()
	//TODO Note use of hook. Navigation is NOT automatically available
	//TODO in non-Screen components

	return (
		<Button
			style={{
				borderColor: '#f08e25',
				borderWidth: 2,
				width: 225,
				margin: 10,
			}}
			// color='#f08e25'
			labelStyle={{ color: '#f08e25', fontSize: 18 }}
			mode='outlined'
			onPress={() => navigation.navigate(toWhere)}
		>
			{title}
		</Button>
	)
}
export function NavStackButton({ title, toWhere }) {
	const navigation = useNavigation()
	//TODO Note use of hook. Navigation is NOT automatically available
	//TODO in non-Screen components

	return (
		<Button
			style={{
				borderColor: '#f08e25',
				borderWidth: 2,
				width: 225,
				margin: 10,
			}}
			// color='#f08e25'
			labelStyle={{ color: '#f08e25', fontSize: 18 }}
			mode='outlined'
			onPress={() => navigation.navigate(toWhere)}
		>
			{title}
		</Button>
	)
}

export function NavButtonGoBack({ title }) {
	const navigation = useNavigation()
	return (
		<Button
			style={{
				borderColor: '#f08e25',
				borderWidth: 2,
				width: 225,
				margin: 10,
			}}
			color='#f08e25'
			labelStyle={{ color: '#f08e25', fontSize: 18 }}
			mode='outlined'
			title={title}
			// title='Close Data Panel'
			onPress={() => {
				navigation.goBack()
			}}
		>
			Go Back
		</Button>
	)
}
