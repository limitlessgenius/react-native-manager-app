
import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { Card, Button } from 'react-native-elements'
import { CardSection } from './common'

import { Actions } from 'react-native-router-flux'


import Ripple from 'react-native-material-ripple';

import { 
	Avatar, 
	SocialIcon 
	} from 'react-native-elements'

class UserRow extends Component {

	onButtonPress(user) {

		Actions.userCardDetail({ user })
	}

	render() {
		const { name, image } = this.props.user

		return (
			<Ripple
				rippleDuration={800}
				onPress={this.onButtonPress.bind(this, this.props.user)}
			>
				<CardSection>
					<Avatar 
						large
						source={{uri: image}}
						activeOpacity={0.7}
						rounded
						xlarge
					/>
					<Text>{name}</Text>
				</CardSection>
			</Ripple>
		)
	}
}

export default UserRow

