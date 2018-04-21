

import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Card, CardSection } from './common'

import { connect } from 'react-redux'

import { fetchEmployees } from '../actions'


class EmployeeList extends Component {

	componentWillMount() {

		this.props.fetchEmployees()

	}
 
	render() {
		return (
			<View>
				<Text>EMPLOYEE LIST</Text>
			</View>
		)	
	}
	
}

const mapStateToProps = (state) => {
	console.log(state)
	return {}
}



export default connect(mapStateToProps, { fetchEmployees })(EmployeeList)




