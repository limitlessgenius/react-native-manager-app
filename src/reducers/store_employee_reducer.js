

import { STORE_EMPLOYEE } from '../actions/types'


const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {

	switch(action.type) {
		case STORE_EMPLOYEE: 
			console.log('X', action)
		default: 
			return state
	}
}




