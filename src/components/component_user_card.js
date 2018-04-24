


import React, { Component } from 'react'
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'

import { Actions } from 'react-native-router-flux'

import { Button, Card, Avatar } from 'react-native-elements'

import { CardSection, CustomCard } from './common'

import * as Animatable from 'react-native-animatable';

// lightSpeedOut

class UserCard extends Component {


	renderCard () {
		const {image, name, selectedExperience } = this.props.user
		const strImage = image.split('med/').join('')
		
		return(
			<CardSection style={
				{flexDirection: 'column', 
				justifyContent: 'center', 
				alignItems: 'center'}}>
				<Image
					style={{width: 300, height: 300}}
				    source={{ uri: strImage }}
				/>
				<CardSection>
					<Button
						buttonStyle={{ width: 300 }}
						backgroundColor="#03A9F4"
					    title="Chat Now"
					    onPress={this.onCardPress.bind(this)}
					/>
				</CardSection>
			</CardSection>
		)
	}
	   
	onCardPress () { Actions.interactiveChatRoom() }

	render() {

		return (

			<CustomCard style={{ flex: 1 }}>
				<TouchableWithoutFeedback 
				style={{ flex: 2 }}
				onPress={this.onCardPress.bind(this)}>
					<View style={styles.container}>
					{this.renderCard()}
					</View>
				</TouchableWithoutFeedback>
			</CustomCard>
		)
	}
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
};

export default UserCard


/*
<Image
	style={{width: 100, height: 100}}
    source={{uri: 'https://randomuser.me/api/portraits/women/93.jpg'}}
/>
*/

/*
<Card
		        key={name}
		        title={name}
		        image={{ uri: "https://randomuser.me/api/portraits/women/93.jpg" }}
		      >
		        <Text style={{marginBottom: 10}}>
		          USER NAME
		        </Text>
		        <Button
		          backgroundColor="#03A9F4"
		          title="GO"
		        >
		        </Button>
		    </Card>
*/





