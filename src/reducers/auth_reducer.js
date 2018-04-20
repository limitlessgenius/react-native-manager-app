
import { 
	EMAIL_CHANGED, 
	PASSWORD_CHANGED, 
	LOGIN_USER_SUCCESS, 
	LOGIN_USER_FAIL, 
	LOADING } from '../actions/types'

const INITIAL_STATE = { 
	email: '', 
	password: '', 
	user: null, 
	error: false,
	loading: false
} 

export default (state = INITIAL_STATE, action) => {
	console.log('ACTION', action)

	switch(action.type) {
		case EMAIL_CHANGED: 
			return { ...state, email: action.payload }
			//produce brand new object
		case PASSWORD_CHANGED: 
			return { ...state, password: action.payload }
		case LOGIN_USER_SUCCESS: 
			return { ...state, user: action.payload, error: false, loading: false }
		case LOGIN_USER_FAIL: 
			return { ...state, error: true, loading: false }
		case LOADING: 
			return { ...state, loading: true, error: false }
		default: 
			return state
	}
}
//reducer: recreates whole state; produces pieces of state; 


