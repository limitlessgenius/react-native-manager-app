
import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { Card, Button } from 'react-native-elements'
import { CardSection } from './common'


import Ripple from 'react-native-material-ripple';

import { 
	Avatar, 
	SocialIcon 
	} from 'react-native-elements'

class UserRow extends Component {

	render() {
		const { name, image } = this.props.user

		return (
			<Ripple
				rippleDuration={800}
				onPress={() => console.log('NEXT: CARD DETAIL')}
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





















