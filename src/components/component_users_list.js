
import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'

import { connect } from 'react-redux'
import { fetchUsers, fetchExperiences } from '../actions'

import { Avatar } from 'react-native-elements'

import { CardSection } from './common'

console.log('AVATAR', Avatar)




class UsersList extends Component {

	componentWillMount() {
		this.props.fetchUsers()
	}

	renderFilteredUsers() {
		// console.log('SELECTED EXPERIENCE', this.props.selectedExperience)
		users = this.props.users.filter(user => user.selectedExperience===this.props.selectedExperience)
		// console.log('ALL USERS', )
		return users
	}

	componentWillUnmount() {
		this.props.fetchExperiences()
	}

	render() {
		// console.log('FILTERED LIST', this.renderFilteredUsers())
		//Why undefined ???
		return (
			<View>
				<FlatList 
					data={this.renderFilteredUsers()}
					renderItem={({item}) => {
						return (
							<CardSection>
								<Text>{item.name}</Text>
								<Avatar
									medium
									source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
									onPress={() => console.log("Works!")}
									activeOpacity={0.7}
								/>
							</CardSection>
							
						)
					}}
				/>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	const { users } = state
	return { users }
}

export default connect(mapStateToProps, { 
	fetchUsers, 
	fetchExperiences
})(UsersList)




