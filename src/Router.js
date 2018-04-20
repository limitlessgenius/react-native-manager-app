
//NAVIGATION · APP FLOW
import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import LoginForm from './components/component_login_form'

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root">

				<Scene 
					key="login" 
					component={LoginForm} 
					title="Login" 
				/>

			</Scene>
		</Router>
	)
}

export default RouterComponent







