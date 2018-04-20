

import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Card, CardSection, Button, Input, Spinner } from './common'

import { createEmployee } from '../actions'

import { connect } from 'react-redux'

class EmployeeCreateForm extends Component {

	render() {
		return (
			<Card>
				<CardSection>
					<Input 
						label="Name"
						placeholder="José"
						onChangeText={(name) => console.log(name)}
					/>
				</CardSection>

				<CardSection>
					<Input 
						label="Phone"
						placeholder="+660049631"
						onChangeText={(phone) => console.log(phone)}
						
					/>
				</CardSection>

				<CardSection>
					<Input 
						label="Shift"
						placeholder="Monday, Wednesday, Friday"
						onChangeText={(shift) => console.log(shift)}
					/>
				</CardSection>

				<CardSection>
					<Button
						onPress={() => {
							console.log('CREATE EMPLOYEE')
							console.log('EMPLOYEE CREATOR', this.props.createEmployee)
						}}
					>
						CREATE EMPLOYEE
					</Button>
				</CardSection>
				
			</Card>
		)
	}
}

export default connect (null, {createEmployee})(EmployeeCreateForm)


//Why button title doesn't display if not inside card section







