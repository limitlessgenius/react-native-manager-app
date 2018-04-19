
import firebase from 'firebase'

import { 
	EMAIL_CHANGED, 
	PASSWORD_CHANGED, 
	LOGIN_USER_SUCCESS, 
	LOGIN_USER_FAIL, 
	LOADING } from './types'


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
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(user => loginUserSuccess(user, dispatch))
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
				.then(user => loginUserSuccess(user, dispatch))
				.catch(() => loginUserFail(dispatch))
			})
	}
}

export const loadingLogin = () => {
	return {
		type: LOADING,
		payload: 'ON'
	}
}

const loginUserSuccess = (user, dispatch) => {
	dispatch({
		type: LOGIN_USER_SUCCESS, 
		payload: user
	})
}

const loginUserFail = (dispatch) => {
	dispatch({
		type: LOGIN_USER_FAIL 
	})
}




