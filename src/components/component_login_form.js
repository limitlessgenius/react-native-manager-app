
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Card, CardSection, Input, Button, Spinner } from './common'
import { connect } from 'react-redux'
import { 
	emailChanged, 
	passwordChanged, 
	loginUser, 
	loadingLogin } from '../actions'

class LoginForm extends Component {

	onEmailChange(email) {
		this.props.emailChanged(email)
	}

	onPasswordChange(password) {
		this.props.passwordChanged(password)
	}

	onButtonPress() {
		const { email, password } = this.props
		//se los pasas del estado
		this.props.loadingLogin()
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

	renderLoadingSpinner() {
		if(this.props.loading) return <Spinner />
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

				{this.renderErrorMessage()}

				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>Login</Button>
				</CardSection>

				{this.renderLoadingSpinner()}
				

			</Card>
		)
	}
}
//Why this pattern
//because we are going to reference this in the call back; we bind to this
const mapStateToProps = (state) => {
	return { 
		email: state.authCredentials.email, 
		password: state.authCredentials.password,
		error: state.authCredentials.error, 
		loading: state.authCredentials.loading
	}

}
//to mapStateToProps be called is done by connect

export default connect(mapStateToProps, { 
	emailChanged, 
	passwordChanged, 
	loginUser, 
	loadingLogin
})(LoginForm)









