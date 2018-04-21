

import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { Card } from './common'

import EmployeeDetail from './component_employee_detail'

import { connect } from 'react-redux'

import { fetchEmployees } from '../actions'


class EmployeeList extends Component {

	componentWillMount() {
		this.props.fetchEmployees()
	}

	renderEmployeeList({item}) {
		return <EmployeeDetail employee={item} />
	}

	render() {
		return(
			<FlatList
				data={this.props.employees}
				renderItem={this.renderEmployeeList.bind(this)}
			/>
		)
	}
	
}

const mapStateToProps = ({ employees }) => {

	const arrID = Object.keys(employees)
	const arrEmployees = Object.values(employees)	
	
	arrEmployees.map((employee, index) => {
		employee["uid"] = arrID[index]
	})
	
	return { employees : arrEmployees }
}

export default connect(mapStateToProps, { fetchEmployees })(EmployeeList)




