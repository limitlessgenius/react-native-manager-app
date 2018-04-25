

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const RoundButton = ({ onPress, children, customStyle }) => {

	const { roundButtonStyle, textStyle } = styles

	return (
		<TouchableOpacity 
			onPress={onPress}
			style={[roundButtonStyle, customStyle]}>
			<Text style={textStyle}>
				{children}
			</Text>
		</TouchableOpacity>
	)
}

const styles = {
	roundButtonStyle: {
		width: 75,
	    height: 75,
	    borderRadius: 75/2,
	    backgroundColor: 'white', 
	    // boxShadow: '0 0 8px 3px rgba(10, 10, 10, 0.2)'
	}
	// buttonStyle: {
	// 	flex:1, 
	// 	alignSelf: 'stretch', 
	// 	backgroundColor: '#fff', 
	// 	borderRadius: 5, 
	// 	borderWidth: 1, 
	// 	borderColor: '#007aff', 
	// 	marginLeft: 5, 
	// 	marginRight: 5,
	// 	paddingTop: 10, 
	// 	paddingBottom: 10, 
	// }, 
	// textStyle: {
	// 	alignSelf: 'center', 
	// 	color: '#007aff', 
	// 	fontSize: 16, 
	// 	fontWeight: '600', 
	// }
}

export { RoundButton }

