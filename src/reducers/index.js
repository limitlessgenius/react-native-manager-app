

import { combineReducers } from 'redux'
import authReducer from './authentication_reducer'
import createEmployeeReducer from './create_employee_reducer'
import listEmployees from './list_employees_reducer'
import experiencesReducer from './experiences_reducer'


export default combineReducers({
	authCredentials: authReducer, 
	employee: createEmployeeReducer, 
	employees: listEmployees, 
	experiences: experiencesReducer, 
	// employeeStore: storeEmployeeReducer
})



