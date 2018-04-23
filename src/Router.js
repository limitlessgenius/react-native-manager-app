
//NAVIGATION · APP FLOW
import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/component_login_form'
import EmployeeList from './components/component_employee_list'
import EmployeeCreateForm from './components/component_employee_create_form'
import EmployeeShowForm from './components/component_employee_show_form'
import EmployeeEdit from './components/component_employee_edit'
import ExperiencesList from './components/component_experiences_list'

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root" hideNavBar >

				<Scene key="auth">
					<Scene key="login" component={LoginForm} title="Login" />
				</Scene>

				<Scene key="main" initial>

					<Scene
						key="experiencesList"
						component={ExperiencesList}
						title="Experiences"
						initial
					/>
					<Scene 
						key="employeeList" 
						component={EmployeeList} 
						title="Employees" 
						rightTitle="Add"
						onRight={() => Actions.employeeCreate()}
					/>

					<Scene key="employeeEdit" component={EmployeeShowForm} title={"Edit Employee"} />
					<Scene key="employeeCreate" component={EmployeeCreateForm} title={"Create Employee"} />
				</Scene>

			</Scene>
		</Router>
	)
}

export default RouterComponent



