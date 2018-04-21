

import React, { Component } from 'react'
import { Picker, Text, View } from 'react-native'
import { Card, CardSection, Button, Input, Spinner } from './common'

import firebase from 'firebase'
import { createEmployee, storeEmployee } from '../actions'
import { connect } from 'react-redux'


class EmployeeCreateForm extends Component {

	onButtonPress() {

		//be aware { name } === { name: name }

		const { name, phone, shift } = this.props

		this.props.storeEmployee({ name, phone, shift: shift || 'Monday' })

	}

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

				<CardSection style={{ flexDirection: 'column' }}>
					<Text style={styles.shiftTextStyle}>Shift</Text>
					<Picker
						selectedValue={this.props.shift}
						onValueChange={value => 
							this.props.createEmployee({ key: 'shift', value })
						}
					>
						<Picker.Item label="Monday" value="Monday" />
						<Picker.Item label="Thursday" value="Thursday" />
						<Picker.Item label="Wednesday" value="Wednesday" />
						<Picker.Item label="Thursday" value="Thursday" />
						<Picker.Item label="Friday" value="Friday" />
						<Picker.Item label="Saturday" value="Saturday" />
						<Picker.Item label="Sunday" value="Sunday" />
					</Picker>
				</CardSection>

				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						CREATE
					</Button>
				</CardSection>
				
			</Card>
		)
	}
}

const styles = {
	shiftTextStyle: {
		fontSize: 18, 
		paddingLeft: 20,
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



