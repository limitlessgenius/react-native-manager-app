
import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { Card, Button } from 'react-native-elements'
import { Avatar } from 'react-native-elements'

import { CardSection } from './common'

// import { SocialIcon } from 'react-native-elements'

// // Icon
// <SocialIcon
//   type='twitter'
// />

class UserRow extends Component {

	render() {
		const { name, image } = this.props.user

		return (

			<TouchableHighlight>

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
			</TouchableHighlight>
		)
	}
}

export default UserRow

//<Text>{name}</Text>

// renderCard(card) {
//     return (
//       <Card
//         key={card.id}
//         title={card.text}
//         image={{ uri: card.uri }}
//       >
//         <Text style={{marginBottom: 10}}>
//           USER NAME
//         </Text>
//         <Button
          
//           backgroundColor="#03A9F4"
//           title="GO"
//         >
//         </Button>
//       </Card>
//     )
//   }

/*
<CardSection>
	<Avatar
		large
		source={{uri: item.image}}
		activeOpacity={0.7}
	/>
</CardSection>
*/





















