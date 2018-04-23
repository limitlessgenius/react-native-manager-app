
import { 
	EXPERIENCES_FETCH_SUCCESS, 
	} from './types'


import firebase from 'firebase'

export const fetchExperiences = () => {


	return(dispatch) => {
		firebase.database().ref(`/experiences/`)
			.on('value', snapshot => {
				console.log('ASYNC', snapshot)
				dispatch({type: 'TEST'})	
		})	
	}
	

	// return(dispatch) => {
	// 	firebase.database().ref(`/experiences/`)
	// 	.on('value', snapshot => {

	// 		dispatch({
	// 			type: EXPERIENCES_FETCH_SUCCESS, 
	// 			payload: snapshot.val()
	// 		})
	// 	})	
	// }
}





