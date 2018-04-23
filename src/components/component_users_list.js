



import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { connect } from 'react-redux'

import { fetchUsers } from '../actions'

class UsersList extends Component {

	componentWillMount() {
		
		const { selectedActivity } = this.props
		
		this.props.fetchUsers()
	}

	render() {

		console.log('USERS LIST IN', this.props.users)
		return (
			<View>
				<Text>USER LIST</Text>
			</View>
		)
	}
}

const mapStateToProps = (state) => {

	const { users } = state

	return { users }
}

export default connect(mapStateToProps, { fetchUsers })(UsersList)




