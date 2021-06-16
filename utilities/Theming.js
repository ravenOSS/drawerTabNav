import {
	DarkTheme as NavigationDarkTheme,
	DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native'
import {
	DarkTheme as PaperDarkTheme,
	DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper'

const CombinedDefaultTheme = {
	...PaperDefaultTheme,
	...NavigationDefaultTheme,
	colors: {
		...PaperDefaultTheme.colors,
		...NavigationDefaultTheme.colors,
		background: 'rgba(76, 175, 80, 0.3)',
	},
}
const CombinedDarkTheme = {
	...PaperDarkTheme,
	...NavigationDarkTheme,
	colors: {
		...PaperDarkTheme.colors,
		...NavigationDarkTheme.colors,
		background: '#c62828',
		// background: 'rgba(76, 175, 80, 0.3)',
	},
}

export { CombinedDefaultTheme, CombinedDarkTheme }

// <View style={[styles.container, { backgroundColor: colors.background }]}>
// const { colors } = theme
