

import { CREATE_EMPLOYEE } from '../actions/types'


const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {

	switch(action.type) {
		case CREATE_EMPLOYEE: 
			console.log('ACTION', action)
			return state
		default: 
			return state	
	}
}



