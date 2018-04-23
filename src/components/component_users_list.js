
import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'

import { connect } from 'react-redux'
import { fetchUsers } from '../actions'

class UsersList extends Component {

	componentWillMount() {
		const { selectedActivity } = this.props
		this.props.fetchUsers()
	}

	renderFilteredUsers() {

		const { users } = this.props


		
		users.forEach(user => console.log(user))

	}



	render() {

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

export default connect(mapStateToProps, { fetchUsers })(UsersList)




