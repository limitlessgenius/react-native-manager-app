

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const RoundButton = ({ onPress, children }) => {

	const { roundButtonStyle, textStyle } = styles

	return (
		<TouchableOpacity 
			onPress={onPress}
			style={roundButtonStyle}>
			<Text style={textStyle}>
				{children}
			</Text>
		</TouchableOpacity>
	)
}

const styles = {
	roundButtonStyle: {
		width: 60,
	    height: 60,
	    borderRadius: 60/2,
	    backgroundColor: 'blue'
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

