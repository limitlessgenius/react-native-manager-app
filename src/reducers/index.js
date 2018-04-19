

import { combineReducers } from 'redux'
import initReducer from './init_reducer'
import authReducer from './auth_reducer'

export default combineReducers({
	initialState: initReducer, 
	authCredentials: authReducer, 
})



