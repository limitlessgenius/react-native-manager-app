
import React, { Component } from 'react'
import { CardSection } from './common'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { Actions } from 'react-native-router-flux'

class EmployeeDetail extends Component {

	onUserPress() {
		
		Actions.employeeEdit({ employee: this.props.employee })
	}

	render() {
		const { name, phone, shift } = this.props.employee

		return (
			<TouchableWithoutFeedback onPress={this.onUserPress.bind(this)}>
				<View>
					<CardSection>
						<Text style={styles.textStyle}>{name}</Text>
					</CardSection>
				</View>
			</TouchableWithoutFeedback>
		)
	}
}

const styles = {
	textStyle: {
		fontSize: 18, 
		paddingLeft: 15
	}
}

export default EmployeeDetail



