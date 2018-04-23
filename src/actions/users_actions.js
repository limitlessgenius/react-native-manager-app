


import firebase from 'firebase'



export const fetchUsers = () => {
	// https://manager-dev-c287d.firebaseio.com/experiences.json
	// FIREBASE DATABASE END POINT
	return(dispatch) => {
		firebase.database().ref(`/users/`)
			.on('value', snapshot => {
				dispatch({
					type: 'FETCH_USERS_SUCCESS', 
					payload: snapshot.val()
				})	
		})	
	}
}