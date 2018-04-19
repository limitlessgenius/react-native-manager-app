
import React from 'react'
import { Text, View } from 'react-native'

const Header = (props) => {

	const { textStyle, viewStyle } = styles

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	)
}

const styles = {
	viewStyle: {
		height: 60, 
		justifyContent: 'center', 
		alignItems: 'center', 
		paddingTop: 15, 
		position: 'relative', 
		elevation: 2, 
		backgroundColor: '#F8F8F8', 
		shadowColor: 'black', 
		shadowOffset: { width:0, height:2 }, 
		shadowOpacity: 0.2, 
	}, 
	textStyle: {
		fontSize: 20, 
	}
}

export default Header


