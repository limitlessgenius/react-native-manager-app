



import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { CardSection, Button } from './common'
import EmployeeShowForm from './component_employee_show_form'


class EmployeeEdit extends Component {
	render() {
		return (
			<Card>
				<EmployeeShowForm />
				<CardSection>
					<Button>Save Changes</Button>
				</CardSection>
			</Card>
		)
	}
}

export default connect(null, null)(EmployeeEdit)




