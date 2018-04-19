

import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { Card, CardSection, Input, Button } from './common'

import { connect } from 'react-redux'

import * as actions from '../actions'

class LoginForm extends Component {

	render() {
		// console.log('INNER PIECE OF REDUX STATE', this.props.initialState)
		return(
			<Card>

				<CardSection>
					<Input 
						label="Email"
						placeholder="email@gmail.com"
					/>
				</CardSection>

				<CardSection>
					<Input 
						securityTextEntry
						label="Password"
						placeholder="password"
					/>
				</CardSection>

				<CardSection>
					<Button
						onPress={() => {

							this.props.startApp()

						}}
					>Login</Button>
				</CardSection>

			</Card>
		)
	}
}

const mapStateToProps = (state) => {

	return { 
		initialState: state.initialState
	}

}
//to mapStateToProps be called is done by connect
export default connect(mapStateToProps, actions)(LoginForm)









