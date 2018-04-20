

import { combineReducers } from 'redux'
import authReducer from './auth_reducer'
import employeesReducer from './employees_reducer'

export default combineReducers({
	authCredentials: authReducer, 
	employees: employeesReducer
})



