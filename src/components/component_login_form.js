
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Card, CardSection, Input, Button } from './common'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../actions'

class LoginForm extends Component {

	onEmailChange(email) {
		this.props.emailChanged(email)
	}

	onPasswordChange(password) {
		this.props.passwordChanged(password)
	}

	onButtonPress() {
		const { email, password } = this.props

		this.props.loginUser({ email, password })
	}

	renderErrorMessage() {
		if(this.props.error) {
			return(
				<View style={{flexDirection:'row', justifyContent:'center'}}>
					<Text style={{color: 'red', fontSize: 18, fontWeight: 'bold'}}>
						Wrong password or user
					</Text> 
				</View>
			)
		}
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
					<Button onPress={this.onButtonPress.bind(this)}>Login</Button>
				</CardSection>

				{this.renderErrorMessage()}

			</Card>
		)
	}
}
//Why this pattern
//because we are going to reference this in the call back; we bind to this
const mapStateToProps = (state) => {
	console.log('NEW USER', state)
	return { 
		email: state.authCredentials.email, 
		password: state.authCredentials.password,
		error: state.authCredentials.error
	}

}
//to mapStateToProps be called is done by connect

export default connect(mapStateToProps, { 
	emailChanged, 
	passwordChanged, 
	loginUser
})(LoginForm)









