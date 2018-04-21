

import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { Card, CardSection } from './common'

import EmployeeDetail from './component_employee_detail'

import { connect } from 'react-redux'

import { fetchEmployees } from '../actions'


class EmployeeList extends Component {

	componentWillMount() {
		this.props.fetchEmployees()
	}

	renderEmployeeList({item}) {
		return (
			<CardSection>
				<EmployeeDetail employeeProfile={item} />
			</CardSection>
		)
	}

	render() {
		return(
			<Card>
				<FlatList
				  data={this.props.employees}
				  renderItem={this.renderEmployeeList.bind(this)}
				/>
			</Card>
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




