
import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { fetchUsers, fetchExperiences } from '../actions'
import { CardSection } from './common'

import UserRow from './component_user_row'

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
							<UserRow 
								user={item}
							/>
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




