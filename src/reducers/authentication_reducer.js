
import { 
	EMAIL_CHANGED, 
	PASSWORD_CHANGED, 
	LOGIN_USER_SUCCESS, 
	LOGIN_USER_FAIL, 
	LOADING } from '../actions/types'

const INITIAL_STATE = { 
	email: '', 
	password: '', 
	error: false,
	loading: false, 
	user: null, 
} 

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case EMAIL_CHANGED: 
			return { ...state, email: action.payload }
			//produce brand new object
		case PASSWORD_CHANGED: 
			return { ...state, password: action.payload }
		case LOGIN_USER_SUCCESS: 
			return { ...state, ...INITIAL_STATE, user: action.payload }
		case LOGIN_USER_FAIL: 
			return { ...state, 
				password: '',
				error: true, 
				loading: false, 
			}
		case LOADING: 
			return { ...state, loading: true, error: false }
		default: 
			return state
	}
}
//reducer: recreates whole state; produces pieces of state; 


