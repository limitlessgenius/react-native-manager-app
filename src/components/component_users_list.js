



import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { connect } from 'react-redux'

import { fetchUsers } from '../actions'

class UsersList extends Component {

	componentWillMount() {
	
		console.log(this.props.selectedActivity)

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




