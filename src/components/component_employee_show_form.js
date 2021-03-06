

import React, { Component } from 'react'
import { CardSection, Input } from './common'

import { View, Text, Picker } from 'react-native'

import { connect } from 'react-redux'

import { createEmployee } from '../actions'

class EmployeeShowForm extends Component { 

	render() {
		return (
			<View>
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
			</View>
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

	console.log('STATE SHOW', state)
	return {}

}

export default connect(mapStateToProps, { createEmployee })(EmployeeShowForm)








