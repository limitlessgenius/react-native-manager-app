
import firebase from 'firebase'

import {
	CREATE_EMPLOYEE, 
	STORE_EMPLOYEE
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

	firebase.database().ref(`/users/${currentUser.uid}/employees`)
		.push({ name, phone, shift })
	//from redux app state
	//path to json datastore ... find a key
	//access specific location of database

}


