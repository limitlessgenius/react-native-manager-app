import firebase from 'firebase'

import { Actions } from 'react-native-router-flux'

import { 
	EMAIL_CHANGED, 
	PASSWORD_CHANGED, 
	LOGIN_USER_SUCCESS, 
	LOGIN_USER_FAIL, 
	LOADING, 
	} from './types'


export const emailChanged = (email) => {
	return {
		type: EMAIL_CHANGED, 
		payload: email
	}
}

export const passwordChanged = (password) => {
	return {
		type: PASSWORD_CHANGED, 
		payload: password
	}
}

export const loginUser = ({ email, password }) => {
	return(dispatch) => {
		// dispatch({ type: LOADING })
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(user => loginUserSuccess(user, dispatch))
			.catch((err) => {
				console.log(err)
				firebase.auth().createUserWithEmailAndPassword(email, password)
				.then(user => loginUserSuccess(user, dispatch))
				.catch(() => loginUserFail(dispatch))
			})
	}
}

export const loadingLogin = () => {
	return {
		type: LOADING,
	}
}

const loginUserSuccess = (user, dispatch) => {
	dispatch({
		type: LOGIN_USER_SUCCESS, 
		payload: user
	})

	Actions.main()
}

const loginUserFail = (dispatch) => {
	dispatch({
		type: LOGIN_USER_FAIL 
	})
}