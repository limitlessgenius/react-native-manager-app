

import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { Card, CardSection } from './common'

import { connect } from 'react-redux'

import { fetchEmployees } from '../actions'


class EmployeeList extends Component {

	componentWillMount() {

		this.props.fetchEmployees()
	}

	render() {
		const arrEmployees = Object.values(this.props.employees)
		return(
			<View>
				<FlatList
				  data={arrEmployees}
				  renderItem={({item}) => <Text>{item.name}</Text>}
				/>
			</View>
		)
	}
	
}

const mapStateToProps = ({ employees }) => {

	return { employees }
}



export default connect(mapStateToProps, { fetchEmployees })(EmployeeList)




