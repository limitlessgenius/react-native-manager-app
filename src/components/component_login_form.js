
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Card, CardSection, Input, Button } from './common'
import { connect } from 'react-redux'
import { startApp, emailChanged } from '../actions'

class LoginForm extends Component {

	onEmailChange(email) {

		this.props.emailChanged()
		console.log('USER CREATED', this.props.authCredentials)
	}

	render() {
		return(
			<Card>

				<CardSection>
					<Input 
						label="Email"
						placeholder="email@gmail.com"
						onChangeText={
							this.onEmailChange.bind(this)
						}
					/>
				</CardSection>

				<CardSection>
					<Input 
						securityTextEntry
						label="Password"
						placeholder="password"
						onChangeText={() => console.log('X')}
					/>
				</CardSection>

				<CardSection>
					<Button onPress={() =>console.log('CLICK')}>Login</Button>
				</CardSection>

			</Card>
		)
	}
}

const mapStateToProps = (state) => {
	return { 
		authCredentials: state.authCredentials, 
	}

}
//to mapStateToProps be called is done by connect
export default connect(mapStateToProps, { emailChanged })(LoginForm)









