

import { combineReducers } from 'redux'
import authReducer from './authentication_reducer'
import createEmployeeReducer from './create_employee_reducer'
import storeEmployeeReducer from './store_employee_reducer'


export default combineReducers({
	authCredentials: authReducer, 
	employee: createEmployeeReducer, 
	employeeStore: storeEmployeeReducer
})



