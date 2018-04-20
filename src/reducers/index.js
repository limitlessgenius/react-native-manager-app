

import { combineReducers } from 'redux'
import authReducer from './authentication_reducer'
import employeesReducer from './employee_reducer'

export default combineReducers({
	authCredentials: authReducer, 
	employees: employeesReducer
})



