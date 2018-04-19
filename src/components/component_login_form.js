
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Card, CardSection, Input, Button } from './common'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged } from '../actions'

class LoginForm extends Component {

	onEmailChange(email) {
		this.props.emailChanged()
	}

	onPasswordChange(password) {
		this.props.passwordChanged()
	}

	render() {
		return(
			<Card>

				<CardSection>
					<Input 
						label="Email"
						placeholder="email@gmail.com"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
					/>
				</CardSection>

				<CardSection>
					<Input 
						securityTextEntry
						label="Password"
						placeholder="password"
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
					/>
				</CardSection>

				<CardSection>
					<Button onPress={() =>console.log('CLICK')}>Login</Button>
				</CardSection>

			</Card>
		)
	}
}
//because we are going to reference this in the call back; we bind to this
const mapStateToProps = (state) => {
	console.log('UPDATED STATE', state)
	return { 
		email: state.authCredentials.email, 
		password: state.authCredentials.password,
	}

}
//to mapStateToProps be called is done by connect
export default connect(mapStateToProps, { 
	emailChanged, 
	passwordChanged })(LoginForm)









