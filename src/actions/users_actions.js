

import firebase from 'firebase'

import { USERS_FETCH_SUCCESS } from './types'

export const fetchUsers = () => {
	// https://manager-dev-c287d.firebaseio.com/users.json
	// FIREBASE DATABASE END POINT
	return(dispatch) => {
		firebase.database().ref('/users/')
			.on('value', snapshot => {
				dispatch({
					type: USERS_FETCH_SUCCESS, 
					payload: snapshot.val()
				})
			})
	}
}
