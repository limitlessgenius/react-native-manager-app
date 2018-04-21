

import React, { Component } from 'react'
import { Picker, Text, View } from 'react-native'
import { Card, CardSection, Button, Input, Spinner } from './common'
import { connect } from 'react-redux'

import EmployeeShowForm from './component_employee_show_form'

import { 
	createEmployee, 
	storeEmployee, 
	} from '../actions'


class EmployeeCreateForm extends Component {

	onButtonPress() {
		//be aware { name } === { name: name }
		const { name, phone, shift } = this.props

		this.props.storeEmployee({ name, phone, shift: shift || 'Monday' })
	}

	render() {
		return (
			<Card>
				<EmployeeShowForm />
					<CardSection>
						<Button onPress={this.onButtonPress.bind(this)}>
							CREATE
						</Button>
					</CardSection>
				
			</Card>
		)
	}
}

const mapStateToProps = (state) => {

	const { name, phone, shift } = state.employee
	return { name, phone, shift }
}

export default connect (mapStateToProps, { 
	createEmployee, 
	storeEmployee
})(EmployeeCreateForm)


// Why button title doesn't display if not inside card section
// start by degining action creator
// utilize key interpolation in state restructuring
// pass key value pairs from inputs



