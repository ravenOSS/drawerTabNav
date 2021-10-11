import { Button, Colors, useTheme } from 'react-native-paper'

const Layout = (props) => {
	const theme = useTheme()
	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: theme.colors.background,
			}}
		>
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: theme.colors.background,
				}}
			/>
		</SafeAreaView>
	)
}
