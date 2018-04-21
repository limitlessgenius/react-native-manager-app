

import React, { Component } from 'react'
import { Picker, Text, View } from 'react-native'
import { Card, CardSection, Button, Input, Spinner } from './common'

import { createEmployee } from '../actions'
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

				<CardSection style={{ flexDirection: 'column' }}>
					<Text style={styles.shiftTextStyle}>Shift</Text>
					<Picker
						selectedValue={this.props.shift}
						onValueChange={
							(shiftValue) => this.props.createEmployee({ key: 'shift', value: shiftValue })
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
					<Button
						onPress={() => { console.log('NEW EMPLOYEE') }}
					>
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

	console.log('STATE', state)

	const { name, number, shift } = state.employee

	return { name, number, shift }
}



export default connect (mapStateToProps, { createEmployee })(EmployeeCreateForm)


// Why button title doesn't display if not inside card section
// start by degining action creator
// utilize key interpolation in state restructuring
// pass key value pairs from inputs



