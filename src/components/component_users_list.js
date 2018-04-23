



import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { connect } from 'react-redux'

import { fetchUsers } from '../actions'

class UsersList extends Component {

	componentWillMount() {
		
		const { selectedActivity } = this.props
		
		console.log('FETCH', this.props.fetchUsers())	
	}

	render() {

		return (
			<View>
				<Text>USER LIST</Text>
			</View>
		)
	}
}

export default connect(null, { fetchUsers })(UsersList)




