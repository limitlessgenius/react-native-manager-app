
//NAVIGATION · APP FLOW
import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/component_login_form'
import EmployeeList from './components/component_employee_list'
import EmployeeCreateForm from './components/component_employee_create_form'
import EmployeeShowForm from './components/component_employee_show_form'
import EmployeeEdit from './components/component_employee_edit'
import ExperiencesList from './components/component_experiences_list'

import UsersList from './components/component_users_list'
import UserCard from './components/component_user_card'

import ChatRoom from './components/component_chat_room'

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
						key="usersList"
						component={UsersList}
						title="Users"
					/>
					<Scene
						key="userCardDetail"
						component={UserCard}
						title="Users"
					/>
					<Scene
						key="interactiveChatRoom"
						component={ChatRoom}
						title="Chat"
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



