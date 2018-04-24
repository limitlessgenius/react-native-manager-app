


import React, { Component } from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'

import { Actions } from 'react-native-router-flux'


class UserCard extends Component {


	onCardPress () {

		Actions.interactiveChatRoom()
	}


	render() {
		console.log('USER CARD DETAIL', this.props.user)
		return (

			<TouchableWithoutFeedback onPress={this.onCardPress.bind(this)}>
				<View>
					<Text>CARD DETAIL</Text>
				</View>
			</TouchableWithoutFeedback>
		)
	}
}



export default UserCard












