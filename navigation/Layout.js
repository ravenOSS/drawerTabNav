import { Button, Colors, useTheme } from 'react-native-paper'

const Layout = (props) => {
	const { colors } = props.theme
	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: colors.background,
			}}
		>
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: colors.background,
				}}
			/>
		</SafeAreaView>
	)
}
