

import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { Card, CardSection } from './common'

import { connect } from 'react-redux'

import { fetchEmployees } from '../actions'


class EmployeeList extends Component {

	componentWillMount() {

		this.props.fetchEmployees()
	}

	renderEmpployeeList({item}) {
		return (
			<CardSection>
				<Text>{item.name}</Text>
			</CardSection>
		)
	}

	render() {
		const arrEmployees = Object.values(this.props.employees)
		return(
			<Card>
				<FlatList
				  data={arrEmployees}
				  renderItem={this.renderEmpployeeList.bind(this)}
				/>
			</Card>
		)
	}
	
}

const mapStateToProps = ({ employees }) => {

	return { employees }
}



export default connect(mapStateToProps, { fetchEmployees })(EmployeeList)




