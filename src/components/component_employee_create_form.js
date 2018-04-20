

import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Card, CardSection, Button, Input, Spinner } from './common'

import { createEmployee, storeEmployee } from '../actions'
import { connect } from 'react-redux'

class EmployeeCreateForm extends Component {

	render() {
		return (
			<Card>
				<CardSection>
					<Input 
						label="Name"
						placeholder="José"
						value={this.props.name}
						onChangeText={value => 
							this.props.createEmployee({ key: 'name', value })
						}
					/>
				</CardSection>

				<CardSection>
					<Input 
						label="Phone"
						placeholder="+34660049631"
						value={this.props.number}
						onChangeText={value => 
							this.props.createEmployee({ key: 'phone', value })
						}
					/>
				</CardSection>

				<CardSection>
					<Input 
						label="Shift"
						placeholder="Monday, Wednesday, Friday"
						onChangeText={value => 
							this.props.createEmployee({ key: 'shift', value })
						}
					/>
				</CardSection>

				<CardSection>
					<Button
						onPress={() => { this.props.storeEmployee() }}
					>
						CREATE
					</Button>
				</CardSection>
				
			</Card>
		)
	}
}

const mapStateToProps = (state) => {

	const { name, number, shift } = state.employee

	return { name, number, shift }
}

export default connect (mapStateToProps, { createEmployee, storeEmployee })(EmployeeCreateForm)


// Why button title doesn't display if not inside card section
// start by degining action creator
// utilize key interpolation in state restructuring
// pass key value pairs from inputs



