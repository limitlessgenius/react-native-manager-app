
import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'

import {
	CREATE_EMPLOYEE, 
	EMPLOYEE_CREATED
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
	//just to pass requirement of action being dispatched
	//from redux app state
	//path to json datastore ... find a key
	//access specific location of database
	//data gets persisted




