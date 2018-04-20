
//NAVIGATION · APP FLOW
import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/component_login_form'
import EmployeeList from './components/component_employee_list'
import EmployeeCreateForm from './components/component_employee_create_form'


const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root" hideNavBar>

				<Scene key="auth">
					<Scene key="login" component={LoginForm} title="Login" initial />
				</Scene>

				<Scene key="main">
					<Scene 
						key="employeeList" 
						component={EmployeeList} 
						title="Employees" 
						rightTitle="Add"
						onRight={() => {
							console.log('CREATE NEW EMPLOYEE')
							Actions.employeeCreate()
						}}
					/>
					<Scene
						key="employeeCreate"
						component={EmployeeCreateForm}
						title={"Create Employee"}
					/>
				</Scene>

			</Scene>
		</Router>
	)
}

export default RouterComponent



