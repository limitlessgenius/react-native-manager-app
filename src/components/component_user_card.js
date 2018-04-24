


import React, { Component } from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'

import { Actions } from 'react-native-router-flux'

import { Button, Card } from 'react-native-elements'


class UserCard extends Component {

	renderCard () {
		/*
		<Card
			key={card.id}
			title={card.text}
			image={{ uri: card.uri }}
			>
			<Text style={{marginBottom: 10}}>
				USER NAME
			</Text>
			<Button
				backgroundColor="#03A9F4"
			    title="GO"
			/>
		</Card>
		*/
	}
	   
	onCardPress () {

		Actions.interactiveChatRoom()
	}


	render() {
		console.log('USER CARD DETAIL', this.props.user)
		return (

			<TouchableWithoutFeedback onPress={this.onCardPress.bind(this)}>
				<View>
					<Card></Card>	
				</View>
			</TouchableWithoutFeedback>
		)
	}
}



export default UserCard















