
import { 
	EXPERIENCES_FETCH_SUCCESS, 
	} from './types'


import firebase from 'firebase'

export const fetchExperiences = () => {
	// https://manager-dev-c287d.firebaseio.com/experiences.json
	// FIREBASE DATABASE END POINT
	return(dispatch) => {
		firebase.database().ref(`/experiences/`)
			.on('value', snapshot => {
				dispatch({
					type: EXPERIENCES_FETCH_SUCCESS, 
					payload: snapshot.val()
				})	
		})	
	}
}







