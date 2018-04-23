
import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'

import { connect } from 'react-redux'
import { fetchUsers, fetchExperiences } from '../actions'


class UsersList extends Component {



	componentWillMount() {
		
		this.props.fetchUsers()
	}

	renderFilteredUsers() {
		
		// console.log('SELECTED EXPERIENCE', this.props.selectedExperience)

		// console.log('ALL USERS', this.props.users)
		
	}

	componentWillUnmount() {
		this.props.fetchExperiences()
	}

	render() {
		this.renderFilteredUsers()
		return (
			<View>
				<FlatList 
					data={this.props.users}
					renderItem={({item}) => {
						return (
							<Text>{item.name}</Text>
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




