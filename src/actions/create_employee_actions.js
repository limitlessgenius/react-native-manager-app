
import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'

import {
	CREATE_EMPLOYEE, 
	EMPLOYEE_CREATED, 
	EMPLOYEES_SUCCESS
} from './types'

//modular action creator pattern to be utilized run on various different props of same obj
export const createEmployee = ({ key, value }) => {
	return {
		type: CREATE_EMPLOYEE, 
		payload: { key, value }
	}
}

export const storeEmployee = ({ name, phone, shift }) => {
	
	const { currentUser } = firebase.auth()
	//access logged in user
	return(dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/employees`)
			.push({ name, phone, shift })
			.then(() => {
				dispatch({ type: EMPLOYEE_CREATED })
				Actions.pop()
			})	
	}
}

export const fetchEmployees = () => {

	const { currentUser } = firebase.auth()
	//ref
	return(dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/employees`)
			.on('value', snapshot => {
				dispatch({ type: EMPLOYEES_SUCCESS, payload: snapshot.val() })
			})
	}
	//snapshot: descriptive obj; not the data - .val()
}

//just to pass requirement of action being dispatched
//from redux app state
//path to json datastore ... find a key
//access specific location of database
//data gets persisted
	




